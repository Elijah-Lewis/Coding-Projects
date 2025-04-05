//main character image
var mcBike;
var mcBikeX = 325;
var mcBikeY = 375;
//enemy bike image
var enemyBike;
//boolean variables
var onSwitch;
var speedSwitch;
//win/loss thing
var gameOutcome;
//updating numerical variables
var points;
var enemySpeed;
//vehicleas from oncoming traffic
var enemyY = [60, 150, 250];
//creating the enemy bikes
var enemy1;
var enemy2;
var enemy3;
var enemy4;
var enemy5;
var enemy6;
var enemy7;
var enemy8;
var enemy9;
var enemy10;
var enemy11;
var enemy12;
var enemy13;
var enemy14;
var enemy15;
var enemy16;
var enemy17;
var enemy18;
var enemy19;
var enemy20;
var enemy21;
var enemy22;
var enemy23;
var enemy24;
//creating the timer
var timer;
var timeLeft;

//creating the collision variable;
var collision = false;

//this is the music
var gameMusic;

//this is the start screen
var startScreen;



function preload(){
  mcBike = loadImage("left facing dirt bike.png");
  enemyBike = loadImage("right facing dirt bike.png");
  gameMusic = loadSound("Subtraction (feat. Jessaudrey).mp3");
  startScreen = loadImage("MotoCrossStartScreen.jpeg")
}

function setup(){
  imageMode(CENTER);
  createCanvas(800, 400);
  mcBikeX = 325;
  mcBikeY = 375;
  onSwitch = "off";
  points = 0;
  enemySpeed = 1;
  gameOutcome = "Not Started";

  enemy1 = new OncomingTraffic;
  enemy2 = new OncomingTraffic;
  enemy3 = new OncomingTraffic;
  enemy4 = new OncomingTraffic;
  enemy5 = new OncomingTraffic;
  enemy6 = new OncomingTraffic;
  enemy7 = new OncomingTraffic;
  enemy8 = new OncomingTraffic;
  enemy9 = new OncomingTraffic;
  enemy10 = new OncomingTraffic;
  enemy11 = new OncomingTraffic;
  enemy12 = new OncomingTraffic;
  enemy13 = new OncomingTraffic;
  enemy14 = new OncomingTraffic;
  enemy15 = new OncomingTraffic;
  enemy16 = new OncomingTraffic;
  enemy17 = new OncomingTraffic;
  enemy18 = new OncomingTraffic;
  enemy19 = new OncomingTraffic;
  enemy20 = new OncomingTraffic;
  enemy21 = new OncomingTraffic;
  enemy22 = new OncomingTraffic;
  enemy23 = new OncomingTraffic;
  enemy24 = new OncomingTraffic;
  enemy26 = new OncomingTraffic;
  enemy26 = new OncomingTraffic;
  enemy27 = new OncomingTraffic;
  enemy28 = new OncomingTraffic;
  enemy29 = new OncomingTraffic;
  enemy30 = new OncomingTraffic;
}

class OncomingTraffic{
  //variables
  constructor(){
    this.xPosition = 20;
    this.yPosition = (random(enemyY));
  }
    //functions
  drawEnemies(){
    image(enemyBike, this.xPosition, this.yPosition, 50, 50);
  }

  moveEnemies(){
    this.xPosition = this.xPosition + 1.38;
    this.yPosition = this.yPosition + 1;
  }

  collisionDetector(){
    if (dist(mcBikeX, mcBikeY, this.xPosition, this.yPosition) < 20){
      collision = true;
      gameOutcome = "Game Lost";
      print("Collision Occured, you lose.");
    }
  }
  scoreUpdater(){
    if (this.yPosition == 400){
      points = points + 1;
    }
  }
}



function draw(){
  if (gameOutcome == "Not Started"){
    image(startScreen, 400, 200, 800, 400);
    
  }
  if (gameOutcome == "Still Going"){
    drawBackground();
    drawTrack();
    drawSpeedometer();
    drawController();
    drawSpeedSwitch();
    drawScoreboard();
    drawOnSwitch();
    image(mcBike, mcBikeX, mcBikeY, 50, 50);
    enemySpawner();
  }
  else if (gameOutcome == "Game Lost"){
    showLoserScreen();
  }
  else if(gameOutcome == "Game Won"){
    showWinnerScreen();
  }
}

function drawBackground(){
  background("cyan");
  fill("black");
  rect(700, 0, 100, 400);
}

function mousePressed(){
  //this conditional checks for the start button and flips te switch
  if(gameOutcome == "Not Started"){
    print("the game will now begin");
    gameOutcome = "Still Going";
    timeLeft = 12;
    timer = setInterval(countdown, 4000);
    gameMusic.play();
    onSwitch = "on";
  }
  print("x: " + mouseX + ",Y: " + mouseY);
}

function keyPressed(){
  if (keyCode == LEFT_ARROW){
    if (mcBikeX > 185){
      mcBikeX = mcBikeX - 140;
    }
  }

  else if (keyCode == RIGHT_ARROW){
    if (mcBikeX < 465){
      mcBikeX = mcBikeX + 140;
    }
  }
}

function drawTrack(){
  //this is the track portion
  beginShape();
  fill(155, 118, 83);
  //this is the outer portion of the track
  quad(175, 400, 0, 280, 0, 0, 550, 400);
  endShape();
  //these are the white lines within the track
  fill("white");
  quad(0, 70, 0, 90, 430, 400, 450, 400);
  quad(0, 180, 0, 200,280, 400, 310, 400);
}

function drawSpeedometer(){
  stroke(255);
  fill("orange");
  rect(720, 75, 60, 100);
  fill("black");
  text("speed", 722, 95);
  text(enemySpeed, 745, 125);
}

function drawController(){
  //this is the white outline of the controller area
  noFill();
  stroke("white");
  rect(700, 290, 100, 110);

  //this is the back piece of the controller
  fill("red");
  rect(725, 310, 50, 70);

  if(mcBikeX == 325){
    fill(128, 0, 32);
    rect(725, 333, 50, 20);
  }
  else if(mcBikeX == 185){
    fill(128, 0, 32);
    rect(725, 360, 50, 20);
  }
  else if(mcBikeX == 465){
    fill(128, 0, 32);
    rect(725, 315, 50, 20);
  }
}

function drawSpeedSwitch(){
  fill("orange");
  circle(400, 200, 100);
}

function drawScoreboard(){
  //this is the scoreboard
  stroke("white");
  fill("orange");
  rect(705, 20, 90, 40);
  textSize(20);
  fill("black");
  text("score: " + points, 705, 40);
}

function drawOnSwitch(){
  //these are the words start and stop
  noStroke();
  fill("red");
  textSize(15);
  text("start", 0, 360);
  text("stop",75 ,360)
  //this is the start slider
  fill(128, 0, 32);
  rect(15, 370, 75, 25, 45, 45, 45, 45);
  //this is the piece that is used to slide between start and stop

  if (onSwitch == "off"){
    fill("red");
    circle(77, 383, 25);
  }
  else if(onSwitch == "on"){
    fill("red");
    circle(25, 383, 25);
  }
}

function showWinnerScreen(){
  background("green");
  fill("white");
  textSize(80);
  text("You Win", 200, 200);
}

function showLoserScreen(){
  background("black");
  textSize(80);
  text("GAME OVER", 200, 200);
}

function countdown(){
  if (timeLeft > 1){
    timeLeft = timeLeft - 1;
    print("you have " + timeLeft + " seconds left");
  }
  else if(timeLeft <= 1){
    if(collision == false){
      gameOutcome = "Game Won";
    }
  }
}

function enemySpawner(){
  if (timeLeft <= 12){
    //these are the enemy bikers stuff
    //drawing the enemy
    enemy1.drawEnemies();
    enemy2.drawEnemies();
    //moving the enemies
    enemy1.moveEnemies();
    enemy2.moveEnemies();
    //checking for detection
    enemy1.collisionDetector();
    enemy2.collisionDetector();
    //this updates the score
    enemy1.scoreUpdater();
    enemy2.scoreUpdater();
  }
  if (timeLeft <= 11){
    enemy3.drawEnemies();
    enemy4.drawEnemies();
    //moving the enemies
    enemy3.moveEnemies();
    enemy4.moveEnemies();
    //checking for detection
    enemy3.collisionDetector();
    enemy4.collisionDetector();
    //this updates the score
    enemy3.scoreUpdater();
    enemy4.scoreUpdater();
  }
  if (timeLeft <= 10){
    enemy5.drawEnemies();
    enemy6.drawEnemies();
    //moving the enemies
    enemy5.moveEnemies();
    enemy6.moveEnemies();
    //checking for detection
    enemy5.collisionDetector();
    enemy6.collisionDetector();
    //this updates the score
    enemy5.scoreUpdater();
    enemy6.scoreUpdater();
  }
  if (timeLeft <= 9){
    enemy7.drawEnemies();
    enemy8.drawEnemies();
    //moving the enemies
    enemy7.moveEnemies();
    enemy8.moveEnemies();
    //checking for detection
    enemy7.collisionDetector();
    enemy8.collisionDetector();
    //this updates the score
    enemy7.scoreUpdater();
    enemy8.scoreUpdater();
  }
  if (timeLeft <= 8){
    enemy9.drawEnemies();
    enemy10.drawEnemies();
    //moving the enemies
    enemy9.moveEnemies();
    enemy10.moveEnemies();
    //checking for detection
    enemy9.collisionDetector();
    enemy10.collisionDetector();
    //this updates the score
    enemy9.scoreUpdater();
    enemy10.scoreUpdater();
  }
  if (timeLeft <= 7){
    enemy11.drawEnemies();
    enemy12.drawEnemies();
    //moving the enemies
    enemy11.moveEnemies();
    enemy12.moveEnemies();
    //checking for detection
    enemy11.collisionDetector();
    enemy12.collisionDetector();
    //this updates the score
    enemy11.scoreUpdater();
    enemy12.scoreUpdater();
  }
  if (timeLeft <= 6){
    enemy13.drawEnemies();
    enemy14.drawEnemies();
    //moving the enemies
    enemy13.moveEnemies();
    enemy14.moveEnemies();
    //checking for detection
    enemy13.collisionDetector();
    enemy14.collisionDetector();
    //this updates the score
    enemy13.scoreUpdater();
    enemy14.scoreUpdater();
  }
  if (timeLeft <= 5){
    enemy15.drawEnemies();
    enemy16.drawEnemies();
    //moving the enemies
    enemy15.moveEnemies();
    enemy16.moveEnemies();
    //checking for detection
    enemy15.collisionDetector();
    enemy16.collisionDetector();
    //this updates the score
    enemy15.scoreUpdater();
    enemy16.scoreUpdater();
  }
  if (timeLeft <= 4){
    enemy17.drawEnemies();
    enemy18.drawEnemies();
    //moving the enemies
    enemy17.moveEnemies();
    enemy18.moveEnemies();
    //checking for detection
    enemy17.collisionDetector();
    enemy18.collisionDetector();
    //this updates the score
    enemy17.scoreUpdater();
    enemy18.scoreUpdater();
  }
  if (timeLeft <= 3){
    enemy19.drawEnemies();
    enemy20.drawEnemies();
    //moving the enemies
    enemy19.moveEnemies();
    enemy20.moveEnemies();
    //checking for detection
    enemy19.collisionDetector();
    enemy20.collisionDetector();
    //this updates the score
    enemy19.scoreUpdater();
    enemy20.scoreUpdater();
  }
  if (timeLeft <= 2){
    enemy21.drawEnemies();
    enemy22.drawEnemies();
    //moving the enemies
    enemy21.moveEnemies();
    enemy22.moveEnemies();
    //checking for detection
    enemy21.collisionDetector();
    enemy22.collisionDetector();
    //this updates the score
    enemy21.scoreUpdater();
    enemy22.scoreUpdater();
  }
  if (timeLeft <= 1){
    enemy23.drawEnemies();
    enemy24.drawEnemies();
    //moving the enemies
    enemy23.moveEnemies();
    enemy24.moveEnemies();
    //checking for detection
    enemy23.collisionDetector();
    enemy24.collisionDetector();
    //this updates the score
    enemy23.scoreUpdater();
    enemy24.scoreUpdater();
  }
}