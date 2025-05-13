# Resume

[https://samcullin.github.io](https://samcullin.github.io)

This is my resume, built with [resume-md](https://github.com/samcullin/resume-md).

## Automatic Deployment to GitHub Pages

This repository includes a GitHub Actions workflow that automatically:
1. Generates an HTML version of the resume using resume-md
2. Deploys the generated HTML to GitHub Pages

### How it works

- Push changes to the `resume.md` file to the `main` branch
- The workflow in `.github/workflows/deploy-resume.yml` will run automatically
- The updated resume will be built, updating the `index.html` file

### Manual trigger

You can also manually trigger the workflow from the "Actions" tab in your GitHub repository.

## Local Development

To generate the HTML locally:

1. Install resume-md: `pip install resume-md`
2. Generate HTML: `resume-md --input resume.md --output index.html`