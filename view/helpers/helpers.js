let Section = function(Title,subTitle=""){
    return $('<div>',{id: Title+"-section",class:"section"})
            .html(`<h1 class='Section-Title'>`+Title+`</h1>
                    <h2 class='Section-Comment'>`+subTitle+`</h2>`);}

let SubSection = function(Title,Parent =""){
    return $('<div>',{id: Title+Parent+"-subSection",class:"Sub-Section"})
            .html("<hr><h2 class='SubSection-Title'>"+Title+"</h2>");
}
let SectionBody = function(id){
    return $('<div>',{id: id+"-body", class:"section-body"});}

let label = function(title,text,location){
    return $('<div>',{id:title+"-"+location,class:"sam-label"})
            .append(
                $("<p>",{class:"label-title"}).html(title),
                $("<p>",{class:"label-text"}).html(text)
            )
}


let BuildProfileSection = function(data){
    return SectionBody("Profile")
    .append(
        label("Name",data.name,"Profile"),
        label("Age",data.age, "Profile"),
        label("Location",data.location,"Profile"),
        label( "About",data.about,"Profile")
    )
}


let RatingItem = function(key,num){
    return $('<div>',{class:"RatingItem"})
    .append(   
        $("<p>",{class:"RatingTag"}).text(key),
        RatingDots(num) 
    );         
}
let RatingDots = function(num){
    let content = $('<div>',{class:"RatingDots"})
    for(var i=0;i<10;i++){
        let dot = $("<img>",{"class":"rateDot ",src:"./view/images/dot.png"});
        if(i>=num){
            dot.addClass("rateDotGray")
        }
        content.append(dot);
    }
    return content;
}
let BuildRatingSection = function(id,data){
    let section = SectionBody(id)
    Object.entries(data).forEach(([key,Value])=> {
       section.append(RatingItem(key,Value));
    })
    return section;
}