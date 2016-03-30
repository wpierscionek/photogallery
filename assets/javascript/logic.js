//creating firebase
var dataBase = new Firebase("https://wildgallery.firebaseio.com");
//global variables
var likes = 0;
var totalPhotos = 0;
//on click function for adding likes
$(".btn-danger").one("click", function() {
    likes++;
    // saving data to firebase
    dataBase.set({
        likes: likes,
        photos: totalPhotos
    });
    //on click change btn color
    var index = $(".btn").index(this);
    $(this).css({
        color: "black",
        background: "#3BFF34",
        border: "none",
        cursor: "auto"
    });
});
//disables right click on pictures
$("img").bind("contextmenu", function() {
    return false;
});
//find total pictures in the document and display the number
var pictures = document.body.getElementsByClassName("example-image");
for (var i = 0; i < pictures.length; i++) {
    totalPhotos++;
    // $(".pictures").html(totalPhotos);
};
//retrieving data from firebase 
dataBase.on("value", function(snapshot) {
    likes = snapshot.val().likes;
    totalPhotos = snapshot.val().photos;
    $(".like").html(snapshot.val().likes);
    $(".pictures").html(snapshot.val().photos);
});