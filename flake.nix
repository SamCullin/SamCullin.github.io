{
  description = "UV development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        dirName = builtins.baseNameOf ./.;
      in
      {
        devShells = {
          default = pkgs.mkShell {
            packages = with pkgs; [
              uv
              nodejs_20  # Using Node.js 20 which is > v18
              python3    # Python 3.x
              python3Packages.pip  # Python package manager
              curl
              gnumake   # GNU Make
            ];

            shellHook = ''
              # Create and activate virtual environment if it doesn't exist
              uv venv
              source .venv/bin/activate
              uv sync --all-extras

              
            '';
          };
        };
      });
}
