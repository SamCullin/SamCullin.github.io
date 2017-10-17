particlesJS('particles-js',config.particle);
let barStatic = false;
let lastSelection = "#Profile-Button";
let changeButtons = function(newbutton){
    if( newbutton != lastSelection){
        $(lastSelection).removeClass('active');
        lastSelection = newbutton;
        $(lastSelection).addClass('active');
    }
}
let updateWidth = function(){
    if($(window).width() < 700-16){
        $('#nav-content').addClass('hidden');
        $('#nav-btn').removeClass('hidden');
        $('nav').removeClass('side-nav').addClass('header-nav');
    }else{
        $('#nav-btn').addClass('hidden');
        $('#nav-content').removeClass('hidden');
        $('nav').removeClass('header-nav').addClass('side-nav');
    }
}
let updateHeader = function(scroll){
    let offSet = 30;
    if($(window).width() < 700-16){offSet = 54;}
    if(scroll < $('#Profile-section').offset().top-offSet){
        $('nav').removeClass('nav-fixed').addClass('nav-relative');
    }else{
        $('nav').removeClass('nav-relative').addClass('nav-fixed');
    }
}
let toggleMenu = function(bool = null){
    if($(window).width() < 700-16){
        let nav = $('#nav-content')
        if( bool == null){
            nav.toggleClass('hidden');
        }else if(bool == true){
            nav.addClass('hidden');
        }else if(bood == false){
            nav.removeClass('hidden');
        }
    }
}
let scrollLocation = function(item){
    let offset = 0;
    if($(window).width() < 700-16){offset = 54;}
    return $(item).offset().top - offset
}

$(document).ready(function(){
    $('#nav-btn').click(function(){
       toggleMenu()
    })
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
            scrollTop: $('#footer').offset().top}, 700);
    });
    $(window).scroll(function() {
        toggleMenu(true);
        var scroll = $(window).scrollTop();
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
        updateWidth()
    });
    updateHeader($(window).scrollTop());
    updateWidth();

});




let BuildWorkExperience = function(data,color="light"){
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
            .append($('<a>',{class: "Cell-Inner "+color}).append(
                $("<img>",{class:"Cell-Main-Image "+color,src:data.img}),
                $("<img>",{class:"Cell-Sub-Image ",src:"./view/images/launch.png"})
           ).attr('href', data.link)
        )
}

let BuildFooterSection = function(data,color="dark"){
    let section = $('<div>',{class: "Footer-Section "+color})
    .append("<hr>");
    data.forEach(item=>{
        section.append(iconlabel(item.icon,item.text,item.link,"col-item",color));
    })
    section.append("<br><hr>");
    return section;
}





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

build();