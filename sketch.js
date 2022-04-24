var blueBin, greenBin, yellowBin, redBin;
var blueBinImg, greenBinImg, yellowBinImg, redBinImg
var batteryImg, mobileImg, newspaperImg, crumpledpaperImg;
var breadImg, fishImg, polybagImg, boxImg, bottleImg, canImg;
var appleImg, bananaImg, eggImg;
var bgImg, bg, bg1Img;
var sprite;
var gameState = "start";
var egg1,apple1;

var button
function preload() {
  blueBinImg = loadImage("./images/bluebin.png");
  greenBinImg = loadImage("./images/greenbin.png");
  yellowBinImg = loadImage("./images/yellowbin.png");
  redBinImg = loadImage("./images/redbin.png");
  bgImg = loadImage("./images/bg1.jpg");
  bg1Img = loadImage("./images/greenboard.jpg");
  appleImg = loadImage("./images/apple.png");
  bananaImg = loadImage("./images/banana.png");
  mobileImg = loadImage("./images/mobile.png");
  boxImg = loadImage("./images/box.png");
  newspaperImg = loadImage("./images/newspaper.png");
  fishImg = loadImage("./images/fish.png");
  polybagImg = loadImage("./images/polybag.png");
  bottleImg = loadImage("./images/bottle.png");
  canImg = loadImage("./images/can.png");
  crumpledpaperImg = loadImage("./images/crumpledpaper.png");
  eggImg = loadImage("./images/egg.png");
  breadImg = loadImage("./images/bread.png")
  
};

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg1 = createSprite(width/2, height/2, windowWidth, windowHeight);
  bg1.addImage(bg1Img);
  bg1.scale = 1.4;
  bg1.visible =false

  bg2 = createSprite(width/2, height/2, windowWidth, windowHeight);
  bg2.addImage(bgImg);
  bg2.scale = 1.5;
  bg2.visible =false

  greenBin = createSprite(width/2-400,height-200, 100, 100);
  greenBin.addImage(greenBinImg);
  greenBin.scale = 1;
  greenBin.visible =false

  blueBin = createSprite(width/2-150,height-200, 100, 100);
  blueBin.addImage(blueBinImg);
  blueBin.scale = 1;
  blueBin.visible =false

  yellowBin = createSprite(width/2+150,height-200, 100, 100);
  yellowBin.addImage(yellowBinImg);
  yellowBin.scale = 1;
  yellowBin.visible =false

  redBin = createSprite(width/2+400,height-200, 100, 100);
  redBin.addImage(redBinImg);
  redBin.scale = 1;
  redBin.visible =false
  /*apple = createSprite(width/2, height/2, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.2;

  banana = createSprite(width/2-350, height/2-80, 10, 10);
  banana.addImage(bananaImg);
  banana.scale = 0.2;

  egg = createSprite(width/2+400, height/2, 10, 10);
  egg.addImage(eggImg);
  egg.scale = 0.2;*/

 

 
 
};

function draw() {
  background("black");  
  
  drawSprites();

  if(gameState === "start") {
   bg1.visible=true

  button = createImg('images/btn1.png');
  button.position(width/2, height-200);
  button.size(50,50);
  button.mouseClicked(go);

  if(keyDown("space")) {
    gameState= "play";
  }
  }

  if(gameState === "play") {
    bg2.visible=true
    addSprites(eggImg,0.2,width/2-400, height/2);
    addSprites(appleImg,0.2,width/2+500, height/2);
    addSprites(bananaImg,0.2,width/2-100, height/2);
    addSprites(polybagImg,0.5,width/2+150, height/2);
    addSprites(crumpledpaperImg,0.2,width/2-200, height/2);
    addSprites(boxImg,0.5,width/2+100, height/2-100);
    addSprites(fishImg,0.2,width/2-250, height/2);
    addSprites(newspaperImg,0.2,width/2-200, height/2);
    addSprites(canImg,0.2,width/2+300, height/2);
    addSprites(breadImg,0.2,width/2-300, height/2);
    addSprites(mobileImg,0.2,width/2+350, height/2);
  }  
};

function addSprites(spriteImage, scale, posX, posY) { 
  sprite = createSprite(posX, posY); 
  sprite.addImage("sprite", spriteImage);
  sprite.scale = scale;
  

/*if(mousePressedOver (sprite)){

  sprite.posX = World.mouseX;
  sprite.posY = World.mouseY;

 }*/
}
function go() {
  gameState= "play";
}

