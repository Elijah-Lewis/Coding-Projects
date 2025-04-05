var beginningImage;
var drillingImage;
var coveringEye;
var yakuzaView;
var endingImage;
var screenState;
var backgroundSong;

function preload(){
  beginningImage = loadImage("homunculus beginning.jpg");
  drillingImage = loadImage("homunculus drilling.jpg");
  coveringEye = loadImage("homunculus covering eye.png");
  yakuzaView = loadImage("homunculus viewing robot.png");
  endingImage = loadImage("homunculus ending.jpg");
  backgroundSong = loadSound("FINDING THE TRUTH.mp3");
}
  
function setup() {
  createCanvas(600, 600);
  background("black");
  screenState = "screen 1";
  imageMode(CENTER);
  backgroundSong.play();
}

function draw() {
  if (screenState == "screen 1"){
    image(beginningImage, 300, 300, 500, 500);
		fill("black");
		rect(0, 0, 600, 50);
		fill("black");
		rect(0, 550, 600, 50);
		textSize(25);
		fill("white");
		text("During a monotonous and deteriorating life", 55, 30);
		text("Nakoshi sought to improve his life", 100, 580);
  }
  else if(screenState == "screen 2"){
  	image(drillingImage, 300, 300, 500, 500);
		fill("black");
		rect(0, 0, 600, 50);
		rect(0, 550, 600, 50);
		textSize(25);
		fill("white");
		text("After some bribing, he tried trepanation", 75, 30);
		text("a surgical procedure believed to enhance the mind", 0, 580);
  }
  else if(screenState == "screen 3"){
    image(coveringEye, 300, 300, 500, 500);
		fill("black");
		rect(0, 0, 600, 50);
		rect(0, 550, 600, 50);
		textSize(25);
		fill("white");
		text("Soon after, the procedure began taking affect", 50, 30);
		text("And he learned more about people by looking at them", 0, 580);
  }
  else if(screenState == "screen 4"){
  	image(yakuzaView, 300, 300, 500, 500);
		fill("black");
		rect(0, 0, 600, 50);
		rect(0, 550, 600, 50);
		textSize(17);
		fill("white");
		text("Looking at them, he could view the physical manifestations of their insecurities", 0, 30);
		textSize(25);
		text("In turn, he began to understand more about the world.", 0, 580);
		
				 
  }
  else if(screenState == "screen 5"){
  	image(endingImage, 300, 300, 500, 500);
		fill("black");
		rect(0, 0, 600, 50);
		rect(0, 550, 600, 50);
		fill("white");
		text("In the process of learning about and helping others", 0, 30);
		text("he slowly began losing himself", 120, 580);
  }
}

function keyPressed(){
  if (key == "1"){
    screenState = "screen 1";
  }
  else if(key == "2"){
    screenState = "screen 2";
  }
  else if (key == "3"){
    screenState = "screen 3";
  }
  else if (key == "4"){
    screenState = "screen 4";
  }
  else if (key == "5"){
    screenState = "screen 5";
  }
}

function mousePressed(){
  if (mouseX > windowWidth/2){
    if (screenState == "screen 1"){
      screenState = "screen 2";
    }
    else if(screenState == "screen 2"){
      screenState = "screen 3";
    }
    else if(screenState == "screen 3"){
      screenState = "screen 4";
    }
    else if(screenState == "screen 4"){
      screenState = "screen 5";
    }
    else if(screenState == "screen 5"){
      screenState = "screen 1";
    }
  }
    
  else if(mouseX < windowWidth/2){
    if (screenState == "screen 1"){
      screenState = "screen 5";
    }
    else if(screenState == "screen 2"){
      screenState = "screen 1";
    }
    else if(screenState == "screen 3"){
      screenState = "screen 2";
    }
    else if(screenState == "screen 4"){
      screenState = "screen 3";
    }
    else if(screenState == "screen 5"){
      screenState = "screen 4";
    }
  }
}