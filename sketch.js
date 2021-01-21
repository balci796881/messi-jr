var fixedRect, movingRect,walkingrect,runningrect,standingrect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  runningrect = createSprite(298,144,134,72)
  walkingrect = createSprite(432,144,109,72)
  standingrect = createSprite(555,144,102,72)
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(touching(movingRect,fixedRect)){
  movingRect.shapeColor = "green"
  fixedRect.shapeColor = "red"
}
else{
  movingRect.shapeColor = "blue"
  fixedRect.shapeColor = "yellow"
}
if(touching(movingRect,standingrect)){
  movingRect.shapeColor = "green"
  standingrect.velocityX = 6
}
else{
  movingRect.shapeColor = "blue"
  fixedRect.shapeColor = "yellow"
}
  drawSprites();
}
