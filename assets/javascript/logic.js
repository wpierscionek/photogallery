$(document).ready(function() {

var likes = 0;
var totalPhotos = 0;


var pictures = document.body.getElementsByTagName("img");
for (var i = 0; i < pictures.length; i++) {
	console.log(pictures);
	totalPhotos++;
	console.log(totalPhotos);
	$(".pictures").html(totalPhotos);

}

//click function for adding likes//
$("button").click(function() {
		likes++;
		console.log(likes);
$(".like").html(likes);
});

});

