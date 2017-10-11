let Section = function(Title){
    return $('<div>',{id: Title+"-section",class:"section"})
            .html("<h1>"+Title+"</h1>");}

let SectionBody = function(id){
    return $('<div>',{id: id+"-body", class:"section-body"});}

let label = function(text,title,location){
    return $('<div>',{id:title+"-"+location,class:"sam-label"})
            .append(
                $("<p>",{class:"label-title"}).text(title),
                $("<p>",{class:"label-text"}).text(text)
            )
}


let BuildProfileSection = function(data){
    return SectionBody("Profile")
    .append(
        label(data.name,"Name","Profile"),
        label(data.age,"Age", "Profile"),
        label(data.location,"Location","Profile"),
        label(data.about, "About","Profile")
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