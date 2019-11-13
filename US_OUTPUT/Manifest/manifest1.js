var images = ["assets/US_INT_2.png", "assets/US_INT_3.png", "assets/US_INT_5.png"];

images.forEach(function(image){
    $("#image_container").append(
        "<img class='map_images' src='"+image+"' />")
})


