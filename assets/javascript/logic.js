$(document).ready(function() {
    var likes = 0;
    var totalPhotos = 0;
    // click function for adding likes//
    $("button").one("click", function() {
        likes++;
        $(".like").html(likes);
        console.log(likes);
        var index = $("button").index(this);
        $(this).css({
            color: "black",
            background: "#3BFF34",
            border: "none",
            cursor: "auto"
        });
    });
    //find total pictures in the document and display the number
    var pictures = document.body.getElementsByTagName("img");
    for (var i = 0; i < pictures.length; i++) {
        // console.log(pictures);
        totalPhotos++;
        // console.log(totalPhotos);
        $(".pictures").html(totalPhotos);
    };
    //database for stroing likes
    var dataBase = new Firebase("https://wildgallery.firebaseio.com/");
    dataBase.set({
        likes: likes,
        pictures: totalPhotos
    });
    dataBase.on("value", function(snapshot) {
        $(".likes").html(snapshot.val().likes);
        $(".pictures").html(snapshot.val().totalPhotos);
    });
});