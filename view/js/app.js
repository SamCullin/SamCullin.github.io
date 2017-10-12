particlesJS('particles-js',config.particle);


$(document).ready(function(){
    $("#header-down-button").click(function(){
        console.log("down was clicked");
    });
});



let BuildWorkExperience = function(data){
    console.log(data);
    let section = SectionBody("WorkExperience")
    data.forEach(item => {
        section.append(BuildWorkExperienceItem(item));
    })
    return section
}
let BuildWorkExperienceItem = function(data){
    return $("<div>",{class:"WorkExperienceItem"}).append(
        label(data.name,data.possition,"WorkExperience"),
        label(data.time,  UnorderList(data.details), "WorkExperience")
    )
}
let UnorderList = function(data){
    let section = $('<div>',{class:"UnorderList"});
    data.forEach(item=> {
        section.append($("<li>").text(item));
    });
    return section;
}

let BuildProjectSection = function(data){
    let section = $("<div>",{class:"ProjectSection"});
    data.forEach(item=> {
        section.append(ProjectTile(item))
    })
    return section
}

let ProjectTile = function(data){
    return $("<div>",{id:data.name,class:"ProjectTileCase"})
            .append($('<div>',{class: "ProjectTile",href:data.link}).append(
                $("<img>",{class:"ProjectTileImage",src:data.img}),
                $("<img>",{class:"ProjectTileLinkIcon",src:"./view/images/upArrow.png"})
           ))
}

let BuildFooterSection = function(data){
    let section = $('<div>',{class: "Footer-Section"})
        .html("<h1 class='dark'>Contact</h1>")
    data.forEach(item=>{
        section.append(iconlabel(data.icon,data.text,data.link,"dark"));
    })
    return section;
}





let build = function(){
    let SkillSection = Section("Abilities")
            .append(
                SectionBody("Abilities")
                .append(
                    SubSection("Skills").append(BuildRatingSection("Skills",config.Knowledge)),
                    SubSection("Tools").append(BuildRatingSection("Tools",config.Tools))
                )
            );

    let ProfileSection = Section("Profile")
            .append(
                SectionBody("Profile")
                .append(
                    SubSection("Sam Cullin").append(BuildProfileSection(config.Profile))
                )
            );

    let WorkExperienceSection = Section("Experiences")
            .append(
                SectionBody("Experiences")
                .append(
                    SubSection("Education").append(BuildWorkExperience(config.Education)),
                    SubSection("Careers").append(BuildWorkExperience(config.WorkExperience))
                )
            );

    let Projects = Section("Projects")
            .append(
                BuildProjectSection(config.Projects)
            );


    $('#content').append
    (
        ProfileSection,
        WorkExperienceSection,
        SkillSection,
        Projects
    );

    $('#footer').html(BuildFooterSection(config.Contacts))
}

build();