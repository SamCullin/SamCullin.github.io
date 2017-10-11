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
        label(data.possition,data.name,"WorkExperience"),
        $("<p>",{class:"WorkExperienceTime"}).text(data.time),
        UnorderList(data.details)
    )
}
let UnorderList = function(data){
    let section = $('<div>',{class:"UnorderList"});
    data.forEach(item=> {
        section.append($("<li>").text(item));
    });
    return section;
}





let build = function(){
    let SkillSection = Section("Skills").append(BuildRatingSection("Skills",config.Knowledge));
    let ProfileSection = Section("Profile").append(BuildProfileSection(config.Profile));
    let WorkExperienceSection = Section("Work Experience").append(BuildWorkExperience(config.WorkExperience));
    $('#content').append
    (
        ProfileSection,
        WorkExperienceSection,
        SkillSection
    );
}

build();