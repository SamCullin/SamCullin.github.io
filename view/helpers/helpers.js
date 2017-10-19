//Building Sections
    let BuildProfileSection = function(data,color="light"){
        return SectionBody("Profile",color)
        .append(
            label("<b>Age</b>",data.age, "Profile","",color),
            label("<b>Location</b>",data.location,"Profile","",color),
            label("<b>About</b>",data.about,"Profile","",color)
        )
    }
    let BuildRatingSection = function(id,data,color="light"){
        let section = SectionBody(id, color)
        Object.entries(data).forEach(([key,Value])=> {
        section.append(RatingItem(key,Value,"col-item",color));
        })
        return section;
    }
    let BuildWorkExperience = function(data,color="light"){
        let section = SectionBody("WorkExperience",color)
        data.forEach(item => {
            section.append(BuildWorkExperienceItem(item,color));
        })
        return section
    }
    let BuildProjectSection = function(data,color="light"){
        let section = $("<div>",{class:"ProjectSection "+color});
        data.forEach(item=> {
            section.append(Cell(item,color))
        })
        return section
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
    let BuildWorkExperienceItem = function(data,color="light"){
        return $("<div>",{class:"WorkExperienceItem "+color}).append(
            label(
                $("<div>",{class:"WorkExperienceLeft "+color}).html("<b>"+data.name+"</b><br>"+data.time),
                $("<div>",{class:"WorkExperienceRight "+color}).html("<b>"+data.possition+"</b><br>"+data.details),
                "WorkExperience",color)
        )
    }



//Building components
    let Section = function(Title,subTitle="",classes="light"){
        return $('<div>',{id: Title+"-section",class:"section "+classes})
                .html(`<h1 class='Section-Title'>`+Title+`</h1>
                        <h2 class='Section-Comment'>`+subTitle+`</h2>`);}

    let SubSection = function(Title,Parent,classes="light"){
        return $('<div>',{id: Title+Parent+"-subSection",class:"Sub-Section "+classes})
                .html("<hr><h2 class='SubSection-Title'>"+Title+"</h2>");
    }
    let SectionBody = function(id, classes = "light"){
        return $('<div>',{id: id+"-body", class:"section-body "+classes});}

    let label = function(title,text,location, classes = "",color="light"){
        return $('<div>',{id:title+"-"+location,class:"sam-label "+classes+" "+color})
                .append(
                    $("<div>",{class:"label-title "+color}).html(title),
                    $("<div>",{class:"label-text "+color}).html(text)
                )
    }
    let iconlabel = function(icon,text,link,classes="col-item",color="light"){
        return $('<div>',{class: "icon-label-outer "+classes+" "+color})
            .append(
                $('<div>',{class: "icon-label-inner "+color}).append(
                $("<img>",{class:"icon-icon-label "+color,src: icon}),
                $("<a>",{class:"link-icon-label "+color}).html(text)
                .attr('href', link)
            )).attr('href', link)
    }
    let Cell = function(data,color="light"){
        return $("<div>",{id:data.name,class:"Cell-Outer col-item "+color})
                .append($('<a>',{class: "Cell-Inner "+color}).append(
                    $("<img>",{class:"Cell-Main-Image "+color,src:data.img}),
                    $("<img>",{class:"Cell-Sub-Image ",src:"./view/images/launch.png"})
               ).attr('href', data.link)
            )
    }
    let RatingItem = function(key,num,classes="col-item",color="light"){
        return $('<div>',{class:"Rating-Item "+classes+" "+color})
            .append(
                $('<p>',{class:"Rating-Tag "+color}).html(key),
                RatingDots(num,color)
            )
    }
    let RatingDots = function(num,color="light"){
        let content = $('<div>',{class:"Rating-Dots "+color})
        for(var i=0;i<10;i++){
            let dot = $("<img>",{"class":"Rate-Dot ",src:"./view/images/dot.png"});
            if(i>=num){
                dot.addClass("Rate-Dot-Gray")
            }
            content.append(dot);
        }
        return content;
    }


// Helper functions 
    let barStatic = false;
    let lastSelection = "#Profile-Button";

    let offset = function(fliped = false){
        if($(window).width() < 700-16){
            return ((fliped)?0:54);
        }else{
            return ((fliped)?54:0);
        }
    };
    let changeButtons = function(newbutton){
        if( newbutton != lastSelection){
            $(lastSelection).removeClass('active');
            lastSelection = newbutton;
            $(lastSelection).addClass('active');
        };
    };
    let updateWidth = function(){
        if($(window).width() < 701){
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
        if(scroll < $('#Profile-section').offset().top-offset(true)){
            $('nav').removeClass('nav-fixed').addClass('nav-relative');
        }else{
            $('nav').removeClass('nav-relative').addClass('nav-fixed');
        }
    };
    let toggleMenu = function(bool = null){
        if($(window).width() < 701){
            let nav = $('#nav-content')
            if( bool == null){
                nav.toggleClass('hidden');
            }else if(bool == true){
                nav.addClass('hidden');
            }else if(bood == false){
                nav.removeClass('hidden');
            }
        }
    };
    let scrollLocation = function(item){
        return $(item).offset().top - offset();
    };




