var car,wall,weight,speed
function setup() {
  createCanvas(1000,400);
 wall = createSprite (900,200,60,200)
  car = createSprite(50, 200, 50, 50);
  speed = random(55,90)
  car.velocityX =speed ;
  weight = random(400,1000)
  wall.shapeColor = "white"

}

function draw() {
  background(0);  
  if(wall.x- car.x <(car.width+wall.width)/2)  {
      car.velocityX = 0;
      var deform = (0.5 * weight * speed * speed)/22509;
      if(deform>180){
        car.shapeColor = "red"
      }
      else if(deform <180 && deform >100){
        car.shapeColor = "yellow"
      }
      else if(deform<100){
        car.shapeColor = "green"
      }

}  drawSprites();
}