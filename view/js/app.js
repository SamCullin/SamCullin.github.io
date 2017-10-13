particlesJS('particles-js',config.particle);


$(document).ready(function(){
    $("#header-down-button").click(function(){
        console.log("down was clicked");
    });
});



let BuildWorkExperience = function(data,color="light"){
    console.log(data);
    let section = SectionBody("WorkExperience",color)
    data.forEach(item => {
        section.append(BuildWorkExperienceItem(item,color));
    })
    return section
}
let BuildWorkExperienceItem = function(data,color="light"){
    return $("<div>",{class:"WorkExperienceItem "+color}).append(
        label(
            $("<div>",{class:"WorkExperienceLeft "+color}).html("<b>"+data.name+"</b><br>"+data.time),
            $("<div>",{class:"WorkExperienceRight "+color}).html("<b>"+data.possition+"</b><br>"+data.details),
            "WorkExperience",color)
    )
}


let BuildProjectSection = function(data,color="light"){
    let section = $("<div>",{class:"ProjectSection "+color});
    data.forEach(item=> {
        section.append(Cell(item,color))
    })
    return section
}

let Cell = function(data,color="light"){
    return $("<div>",{id:data.name,class:"Cell-Outer col-item "+color})
            .append($('<div>',{class: "Cell-Inner "+color,href:data.link}).append(
                $("<img>",{class:"Cell-Main-Image "+color,src:data.img}),
                $("<img>",{class:"Cell-Sub-Image ",src:"./view/images/launch.png"})
           ))
}

let BuildFooterSection = function(data){
    let section = $('<div>',{class: "Footer-Section dark"})
        .html("<h1 class='dark'>Contact</h1>")
    data.forEach(item=>{
        section.append(iconlabel(data.icon,data.text,data.link,"col-icon","dark"));
    })
    return section;
}





let build = function(){
    let SkillSection = function(color){
        return Section("Abilities","",color)
            .append(
                SectionBody("Abilities",color)
                .append(
                    SubSection("Skills","Abilities",color).append(BuildRatingSection("Skills",config.Knowledge,color)),
                    SubSection("Tools","Abilities",color).append(BuildRatingSection("Tools",config.Tools,color))
                )
            );
    }("light");

    let ProfileSection = function(color){
        return Section("Profile","",color)
            .append(
                SectionBody("Profile",color)
                .append(
                    SubSection("Sam Cullin","Profile",color).append(BuildProfileSection(config.Profile,color))
                )
            );
    }("light");

    let WorkExperienceSection = function(color){
        return Section("Experiences","",color)
            .append(
                SectionBody("Experiences",color)
                .append(
                    SubSection("Education","Experiences",color).append(BuildWorkExperience(config.Education,color)),
                    SubSection("Careers","Experiences",color).append(BuildWorkExperience(config.WorkExperience,color))
                )
            );
    }("mild");

    let Projects = function(color){
        return Section("Projects","",color)
            .append(
                SubSection("","Projects",color).append(
                    BuildProjectSection(config.Projects,color)
                    
                )
            );
    }("mild");


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