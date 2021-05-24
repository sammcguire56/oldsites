var images = ["images/slides/slide_1.jpg", "images/slides/slide_2.jpg", "images/slides/slide_3.jpg", "images/slides/slide_4.jpg", "images/slides/slide_5.jpg", "images/slides/slide_6.jpg", "images/slides/slide_7.jpg", "images/slides/slide_8.jpg", "images/slides/slide_9.jpg"]

var imageNumber = 0;
var imageLength = images.length - 1;

function changeImage(x) {
	imageNumber += x;
	if (imageNumber > imageLength) {
		imageNumber = 0;
	}
	if (imageNumber < 0) {
		imageNumber = imageLength;
	}
	
	document.getElementById("slideshow").src = images[imageNumber];
	
	return false;
}

function autoRun () {
	setInterval("changeImage(1)", 1000);
}