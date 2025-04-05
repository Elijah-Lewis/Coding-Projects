//This project is a depiction of Dio Brando from Jojo's Bizzare Adventure: Steel Ball Run

var lightSwitch = false;
var nameTag = "onHat";
var bodyColor = ("cyan");
var stripeColor = ("yellow");

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw(){
  background(135, 206, 235);
  stroke("black");
  strokeWeight(10);
  //I created this if statement to find the location of points within my canvas
  if (mouseIsPressed == true){
    print("x= " + mouseX, "y= "+ mouseY);
  }

  
  //These arcs are his body
  fill(bodyColor);
  ellipse(200, 300, 150, 400);

  //These are the lines within his body
  //These are the lines in the body
  strokeWeight(7.5);
  stroke(stripeColor);
  line(133, 316, 148, 304);
  line(135, 344, 178, 317);
  line(138, 371, 222, 313);
  line(143, 400, 266, 326);
  line(198, 397, 262, 363);
  line(136, 351, 188, 396);
  line(132, 307, 230, 396);
  line(183, 317, 258, 389);
  line(233, 316, 265, 344);
  line(255, 300, 267, 314);
  
  
  // here I am maknig his face and making it peach color
  stroke("black");
  fill(255, 229, 180);
  arc(200, 200, 210, 225, 270, 240, OPEN);


  //Here I am creating his hat
  //here I am starting the brim of his hat
  strokeWeight(7.5)
  fill("cyan");
  rect(100, 100, 200, 50, 25, 25, 25, 25);

  //here I am starting the rest of his hat
  fill("cyan");
  arc(200,100, 175, 160, 180, 0);

  //Below is the code for the lettering on the hat
  //This is the D
  if (nameTag == "onHat"){
    fill("gold");
    strokeWeight(7);
    arc(125, 100, 90, 100, 270, 90, CHORD);
    fill("cyan");
    strokeWeight(4);
    arc(137, 100, 38, 50, 270, 90, CHORD);
  
    //Below is the I
    stroke("black");
    strokeWeight(7);
    fill("gold");
    rect(187, 45, 20, 100);
  
    //Lastly is the O
    ellipse(250, 100, 50, 100);
    strokeWeight(4);
    fill("cyan");
    ellipse(250, 100, 20, 45);
  }
  
  //I am now creating his eyes
  rotate(0);
  stroke('black');
  strokeWeight(6);
  fill(mouseX, mouseY, 0);
  ellipse(150, 200, 50, 25);
  ellipse(250, 200, 50, 25);

  //Now, I will draw the iris'
  noStroke();
  fill(27, 86, 117);
  circle(150, 200, 20);
  circle(250, 200, 20);

  //I will now finish this by creating the pupils 
  stroke("black");
  strokeWeight(5);
  point(150, 200);
  point(250, 200);

  //I am now creating the nose
  fill(255, 229, 180);
  strokeWeight(1);
  rect(195, 220, 10, 30);
  triangle(195, 220, 195, 250, 190, 245);
  triangle(205, 220, 205, 250, 210, 245);

  
  //I am now making his mouth
  
  fill(255, 200, 150);
  beginShape();
  vertex(230, 270);
  vertex(220, 260);
  vertex(180, 260);
  vertex(170, 270);
  vertex(180, 280);
  vertex(220, 280);
  vertex(230, 270);
  vertex(170, 270);
  endShape(); 
}

function keyPressed(){
   if (lightSwitch == "off"){
    bodyColor = "yellow";
     stripeColor = "cyan";
     lightSwitch = "on";
    print("I saw a key get pressed");
  }
  else{
     bodyColor = "cyan";
    stripeColor = "yellow";
    lightSwitch = "off";
    print("I saw a key get pressed");
  }
}

function mousePressed(){
  if (nameTag == "onHat"){
   nameTag = "flownAway"; 
    print("The mouse was clicked");
  }
  else{
    nameTag = "onHat";
    print("The mouse was clicked");
  }
}