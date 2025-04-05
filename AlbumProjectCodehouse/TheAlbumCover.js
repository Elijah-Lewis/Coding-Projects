var timeOfDay = "night";
var goldHelmetColor = ("gold");
var helmetOutline = (0, 0, 0);
var greyHelmetMainColor = (150, 166, 195);
var greyHelmetAccentColor = (129, 143, 171);
var song;
var ufoPic;
var ufoVersion = "ufoPic";

function preload(){
  song = loadSound("DaftPunkContact.mp3");
  ufoPic = loadImage("ufo.png");
}

function setup() {
  createCanvas(600 , 600);
  angleMode(DEGREES);
}

function draw(){
  //this is the moon and the midnight sky
  if (timeOfDay == "night"){
    background(16,42,133);

    if (ufoVersion == "ufoPic"){
      
      fill(246, 241, 213);
      noStroke();
      beginShape();
      vertex(75, 0);
      bezierVertex(11, 33, 15, 160, 128, 125);
      bezierVertex( 76, 97, 60, 41, 75, 0);
      endShape();

      imageMode(CENTER);
      image(ufoPic, mouseX, 225, 200, 200);
      
    }
    else if (ufoVersion == "ufoSketch"){
      
      //this is the spaceship
      stroke("black");
      strokeWeight(4);
      fill(152, 159, 163);
      ellipse(300, 90, 150, 50);
      arc(300, 70, 75, 90, 150, 270);
      arc(300, 70, 75, 90, 270, 30);
      //this is the clear part at the top
      fill(240, 240, 240);
      beginShape();
      vertex(265, 70);
      bezierVertex(260, 19, 340, 19, 335, 70);
      bezierVertex(315, 83, 280, 80, 265, 70);
      endShape();
      //these are the lines on the ufoPic
      stroke("orange");
      line(300, 90, 300, 105);
      line(254, 80, 236, 88);
      line(348, 79, 368, 87);
    }
  }
    
  //This is the sun and the sky
  if (timeOfDay == "day"){
    background(135, 206, 235);
    fill(255, 255, 112);//this is the color of the sun
    stroke(252, 229, 112);
    strokeWeight(10);
    circle(525, 75, 100);
  }
  if (mouseIsPressed == true){
    print("x=" + mouseX + ", y=" + mouseY)
  }
  
  //this side of the mask belongs to guy manuel(gold)
  stroke("black");
  strokeWeight(5);
  fill(helmetOutline);
  arc(300, 425, 200, 250, 270,90);
  line(300, 600, 300, 300);

  fill(goldHelmetColor);
  arc(300, 550, 225, 100, 0, 90);
  beginShape();
  vertex(412.5, 550);
  bezierVertex(412.5, 450, 425, 315, 300, 300);
  bezierVertex(415, 300, 415, 550, 300, 550);
  endShape();

  //this side of the helmet belongs to Thomas Bangalter(grey)
  //this is the lower part of the helmet
  fill(greyHelmetMainColor);
  beginShape();
  stroke(150, 166, 195);
  strokeWeight(1);
  vertex(300, 600);
  vertex(250, 600);
  vertex(187.5, 550);
  vertex(300, 550);
  endShape();
//this is the upper part of the helmet
  beginShape();
  vertex(187.5, 550);
  bezierVertex(187.5, 450, 187.5, 315, 300, 300);
  endShape();
  noStroke();
  triangle(187.5, 550, 300, 550, 300, 300);

  //This is the mouth of the grey helmet
  fill(helmetOutline);
  rect(250, 550, 50, 10);

  //this is the visor
  beginShape();
  vertex(300, 400);
  bezierVertex(260, 407, 228, 406, 200, 385);
  vertex(200, 385);
  bezierVertex(192, 390, 192, 417, 190, 447);
  vertex(190, 447);
  bezierVertex(193, 475, 248, 486, 300, 490)
  vertex(300, 490);
  endShape();

  //this is the brim of the mask
  fill(greyHelmetAccentColor);
  beginShape();
  vertex(300, 400);
  bezierVertex(260, 407, 228, 406, 200, 385);
  vertex(200, 385);
  bezierVertex(195, 367, 215, 356, 217, 356);
  vertex(217, 356);
  bezierVertex(250, 356, 295, 356, 301, 356);
  vertex(301, 356);
  endShape();

  //This is creating the shading near the cheek
  fill(greyHelmetAccentColor);
  triangle(250, 600, 188, 451, 187, 550);

  //These are the ear areas of the helmet
  //this is the silver side
  fill(greyHelmetAccentColor);
  quad(198, 387, 184, 392, 176, 421, 191, 452);

  fill(goldHelmetColor);
  stroke("black");
  strokeWeight(5);
  quad(400, 391, 434, 421, 438, 502, 409, 531);
}

function mousePressed(){
  if (timeOfDay == "night"){
    timeOfDay = "day";
    song.pause();
  }
  else{
    timeOfDay = "night";
    song.play();
  }
}

function keyPressed(){
  if (key == " "){
    if (ufoVersion == "ufoPic"){
      ufoVersion = "ufoSketch";
      print("The ufo you are now seeing was drawn")
    }
    else if (ufoVersion == "ufoSketch"){
      ufoVersion = "ufoPic";
      print("The ufo you are now seeing is an image from google.")
    }
  }
}  