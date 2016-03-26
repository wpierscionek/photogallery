$(document).ready(function() {

var likes = 0;
var totalPhotos = 0;

$("button").click(function() {
		likes++;
		console.log(likes);
$(".like").html(likes);
});

});

