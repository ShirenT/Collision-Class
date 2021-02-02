var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  box1 = createSprite(200,200,50,50);
  box1.shapeColor = "green";
  box1.debug = true;

  
  box2 = createSprite(400,200,50,50);
  box2.shapeColor = "green";
  box2.debug = true;

  
  box3 = createSprite(600,200,50,50);
  box3.shapeColor = "green";
  box3.debug = true;

  
  box4 = createSprite(800,200,50,50);
  box4.shapeColor = "green";
  box4.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, box3)){
    movingRect.shapeColor = "red";
    box3.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    box3.shapeColor = "green";
  }
  
  drawSprites();
}

