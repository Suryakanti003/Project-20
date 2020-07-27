let car, wall;
let weight, speed;
let button;

function setup() {
  createCanvas(1600, 400);

  weight = floor(random(400, 1500));
  speed = floor(random(50, 80));

  //making the car
  car =createSprite(50, 200, 30, 30);
  car.shapeColor=255;
  car.velocityX=speed;

  //making the wall
  wall = createSprite(1500, height/2, 60, height);
  wall.shapeColor = 80;
  wall.depth=-9999;

  button=createButton("New Car");
  button.position(1550,200);
  button.mousePressed(reset);

}

function draw() {
  background(20);

  if(abs(car.x - wall.x) < (car.width + wall.width) / 2){
    noLoop();

    let deformaiton = 0.5 * weight * pow(speed, 2) / 22509;

    if (deformaiton < 100) {
      //changing the color to green
      car.shapeColor = color(0, 255, 0);
    }else if (deformaiton < 180) {
      //changing the color to yellow
      car.shapeColor = color(230, 230, 0);
    } else {
      //changing the color to red;
      car.shapeColor = color(255, 0, 0);
    }

    fill(255);
    text(`Speed:${speed}`, 1000, 20);
    text(`Weight:${weight}`,1000,50);
    text(`Deformation:${floor(deformaiton)}`,1000,80);

  }

  drawSprites();
}

function reset() {
  loop();
  car.x=50;
  car.shapeColor=255;
  weight = floor(random(400, 1500));
  speed = floor(random(50, 80));
  car.velocityX=speed;
}

