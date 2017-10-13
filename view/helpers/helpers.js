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
    return $('<div>',{class: "icon-label "+classes+" "+color})
        .append(
            $("<img>",{class:"icon-icon-label "+color,src:icon}),
            $("<a>",{class:"link-icon-label "+color}).html(text)
        )
}


let BuildProfileSection = function(data,color="light"){
    return SectionBody("Profile",color)
    .append(
        label("<b>Age</b>",data.age, "Profile","",color),
        label("<b>Location</b>",data.location,"Profile","",color),
        label("<b>About</b>",data.about,"Profile","",color)
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
let BuildRatingSection = function(id,data,color="light"){
    let section = SectionBody(id, color)
    Object.entries(data).forEach(([key,Value])=> {
       section.append(RatingItem(key,Value,"col-item",color));
    })
    return section;
}