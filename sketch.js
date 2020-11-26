var santa,banta;

function setup() {
  createCanvas(800,400);
  santa=createSprite(400, 200, 50, 50);
  banta=createSprite(300,200,100,100);

  santa.shapeColor="orange";
  banta.shapeColor="green";
  
  santa.debug=true;
  banta.debug=true;}

function draw() {
  background("black"); 
  
  santa.y=mouseY;
  santa.x=mouseX;

  if(santa.x-banta.x<santa.width/2+banta.width/2 && banta.x-santa.x<santa.width/2+banta.width/2 && 
    santa.y-banta.y<santa.height/2+banta.height/2 && banta.y-santa.y<santa.height/2+banta.height/2){
    santa.shapeColor="red";
    banta.shapeColor="red";}
  else {
    santa.shapeColor="orange";
    banta.shapeColor="green"}

  drawSprites();

  /*fill("white");
  textSize(30);
  text("santa x "+santa.x,350,50)*/
}