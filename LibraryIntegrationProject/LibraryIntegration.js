var bgImage;

function preload(){
	bgImage = loadImage("GreatWaveOffKanagawa.jpg", 300, 300);
}

function setup() {
	createCanvas(600, 600);
	createCanvas(600, 600, WEBGL);
	//pictureObject = createPicture3D(bgImage, 3, 4, .3)
}

function draw() {
	background(0);
	FileList("white");
	ellipse(200, 300, 25, 25);
	pictureObject.show()
}