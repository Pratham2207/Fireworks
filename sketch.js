var fireworks = [];
var gravity;

function setup() {
  colorMode(HSB);
  createCanvas(800,400);
  gravity = createVector(0,0.2);
  stroke(255);
  strokeWeight(4);
  background(0);
}

function draw() {
  colorMode(RGB);
  background(0,0,0,55);  
  if(random(1) < 0.03){
    fireworks.push(new Firework());
  }
for(var i = fireworks.length-1; i >= 0;i--){
  fireworks[i].update();
  fireworks[i].show();
  if(fireworks[i].done()){
    fireworks.splice(i,1);
  }
}
}