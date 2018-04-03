particlesJS('particles-js',config.particle);


let build = function(){
    let ProfileSection = function(color){
        return Section("Resume","Sam Cullin",color)
            .append(
                SectionBody("Resume",color)
                .append(
                    SubSection("Profile","Resume",color)
                        .append(label(
                            $("<div>",{class: "Profile-Image-Container"}).append(
                                $("<img>",{class: "Profile-Image",src:"view/images/profile_photo2.JPG"})
                            ),
                            BuildProfileSection(config.Profile,color),
                        "Profile",
                        "Profile-Label",
                        color))
                )
            );
    }("light");



    let WorkExperienceSection = function(color){
        return Section("Experience","",color)
            .append(
                SectionBody("Experience",color)
                .append(
                    SubSection("Education","Experience",color).append(BuildTextSection(config.Education,color)),
                    SubSection("Work","Experience",color).append(BuildTextSection(config.WorkExperience,color))
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
            .append(SectionBody("Projects",color).append(
                SubSection("","Projects",color).append(
                
                    BuildTextSection(config.Projects,color)
                    
                )
            ));
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
        Projects,
        SkillSection,
        WorkExperienceSection
    );

    $('#footer').append(
        FooterSection
    );
    setTimeout(finishedBuilding, 500);
}
updateWidth();
updateHeight();
build();


$(document).ready(function(){
    $('#printer').click(function(){
        $('#Experience-section').insertBefore($('#Abilities-section')); 
        $('#Contact-section').insertBefore($('#Abilities-section'));
        window.print();
        $('#Experience-section').insertAfter($('#Abilities-section'));
        $('#Contact-section').appendTo($('#footer'));

    });
    $('#nav-btn').click(function(){
       toggleMenu();
    });
    $("#start-button").click(function(){
        $('html,body').animate({
            scrollTop: scrollLocation('#Resume-section')}, 700);
    });
    $("#Profile-Button").click(function(){
        $('html,body').animate({
            scrollTop: scrollLocation('#Resume-section')}, 700);
    });
    $("#Experience-Button").click(function(){
        $('html,body').animate({
            scrollTop: scrollLocation('#Experience-section')}, 700);
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

        if      (scroll < $('#Projects-section').offset().top)  {changeButtons("#Profile-Button");
        }else if(scroll < $('#Abilities-section').offset().top) {changeButtons("#Projects-Button");
        }else if(scroll < $('#Experience-section').offset().top){changeButtons("#Abilities-Button");
        }else if(scroll < $('#footer').offset().top)            {changeButtons("#Experience-Button");
        }else                                                   {changeButtons("#Contact-Button");}
    });
    $(window).resize(function(){
        updateWidth();
    });
    

});