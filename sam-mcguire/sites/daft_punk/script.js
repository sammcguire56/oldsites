var images = ["image1.jpg" , "image2.jpg" , "image3.jpg" , "image4.jpg" , "image5.jpg" , "image6.jpg" , "image7.jpg" , "image8.jpg" , "image9.jpg" , "image10.jpg" , "image11.jpg" , "image12.jpg" , "image13.jpg" , "image14.jpg"]
var caption = ["Instant Classic." , "Give Life Back To Music" , "A Union Of Cosmic Forces." , "Useful? Totes." , "It's The Little Things" , "He's Up All Night To The Sun" , "Stick 'Em Up!" , "Sweat! Sweat! Sweat!" , "Doin' It Right" , "Buckle Up" , "Give Life Back To Music" , "Bring The Party Home" , "She's Up All Night" , "Like the Legend Of The Phoenix"]

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
	document.getElementById("caption").innerHTML = caption[imageNumber];
	
	return false;
}

function autoRun () {
	setInterval("changeImage(1)", 5000);
}