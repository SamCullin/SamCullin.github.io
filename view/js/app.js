particlesJS('particles-js',config.particle);


let build = function(){
    let ProfileSection = function(color){
        return Section("Profile","",color)
            .append(
                SectionBody("Profile",color)
                .append(
                    SubSection("Sam Cullin","Profile",color)
                        .append(label(
                            $("<img>",{class: "Profile-Image",src:"view/images/FindasLogo.png"}),
                            BuildProfileSection(config.Profile,color),
                        "Profile",
                        "Profile-Label",
                        color))
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

    let SkillSection = function(color){
        return Section("Abilities","",color)
            .append(
                SectionBody("Abilities",color)
                .append(
                    SubSection("Skills","Abilities",color).append(BuildRatingSection("Skills",config.Skills,color)),
                    SubSection("Languages","Abilities",color).append(BuildRatingSection("Languages",config.Languages,color)),
                    SubSection("Tools","Abilities",color).append(BuildRatingSection("Tools",config.Tools,color))
                )
            );
    }("light");

    let Projects = function(color){
        return Section("Projects","",color)
            .append(
                SubSection("","Projects",color).append(
                    BuildProjectSection(config.Projects,color)
                    
                )
            );
    }("mild");

    let FooterSection = function(color){
        return Section("Contact","",color)
                .append(
                    BuildFooterSection(config.Contacts,color)
                )
            
    }("dark");


    $('#content').append
    (
        ProfileSection,
        WorkExperienceSection,
        SkillSection,
        Projects
    );

    $('#footer').append(
        FooterSection
    );
}
updateWidth();
build();
updateHeader($(window).scrollTop());

$(document).ready(function(){
    $('#nav-btn').click(function(){
       toggleMenu();
    });
    $("#start-button").click(function(){
        $('html,body').animate({
            scrollTop: scrollLocation('#Profile-section')}, 700);
    });
    $("#Profile-Button").click(function(){
        $('html,body').animate({
            scrollTop: scrollLocation('#Profile-section')}, 700);
    });
    $("#Experience-Button").click(function(){
        $('html,body').animate({
            scrollTop: scrollLocation('#Experiences-section')}, 700);
    });
    $("#Skills-Button").click(function(){
        $('html,body').animate({
            scrollTop: scrollLocation('#Abilities-section')}, 700);
    });
    $("#Projects-Button").click(function(){
        $('html,body').animate({
            scrollTop: scrollLocation('#Projects-section')}, 700);
    });
    $("#Contact-Button").click(function(){
        $('html,body').animate({
            scrollTop: $('#footer').offset().top+offset()}, 700);
    });
    $(window).scroll(function() {
        toggleMenu(true);
        var scroll = $(window).scrollTop() + offset();
        updateHeader(scroll);
        if(scroll < $('#Experiences-section').offset().top){
            changeButtons("#Profile-Button");
        }else if(scroll < $('#Abilities-section').offset().top){
            changeButtons("#Experience-Button");
        }else if(scroll < $('#Projects-section').offset().top){
            changeButtons("#Skills-Button");
        }else if(scroll < $('#footer').offset().top){
            changeButtons("#Projects-Button");
        }else{
            changeButtons("#Contact-Button");
        }
    });
    $(window).resize(function(){
        updateWidth();
    });
    

});