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

$(document).ready(function(){
    $(".start-button").click(function(){
        $('html,body').animate({
            scrollTop: $('#Profile-section').offset().top}, 700);
        console.log("down was clicked");
    });
    $("#Profile-Button").click(function(){
        $('html,body').animate({
            scrollTop: $('#Profile-section').offset().top}, 700);
        console.log("down was clicked");
    });
    $("#Experience-Button").click(function(){
        $('html,body').animate({
            scrollTop: $('#Experiences-section').offset().top}, 700);
        console.log("down was clicked");
    });
    $("#Skills-Button").click(function(){
        $('html,body').animate({
            scrollTop: $('#Abilities-section').offset().top}, 700);
        console.log("down was clicked");
    });
    $("#Projects-Button").click(function(){
        $('html,body').animate({
            scrollTop: $('#Projects-section').offset().top}, 700);
        console.log("down was clicked");
    });
    $("#Contact-Button").click(function(){
        $('html,body').animate({
            scrollTop: $('#footer').offset().top}, 700);
        console.log("down was clicked");
    });
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if(scroll < $('#Profile-section').offset().top-30){
            $('nav').removeClass('side-nav-fixed').addClass('side-nav-relative');
        }else{
            $('nav').removeClass('side-nav-relative').addClass('side-nav-fixed');
        }
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