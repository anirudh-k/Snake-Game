// our Snake object
var s;
// the scale for our visual game
var scl = 20;

// the food the Snake eats
// a vector
var food;

// sets the location of the food to a random square on the grid
function pickLocation() {
   // this is done to ensure the space picked is on the grid
   var cols = floor(width/scl);
   var rows = floor(height/scl);

   food = createVector(floor(random(cols)), floor(random(rows)));
   food.mult(scl);
}

// required for p5
// called at initialization
function setup() {
   createCanvas(600, 600);
   frameRate(10);

   // initialize our objects
   s = new Snake();
   pickLocation();
}

// required for p5
// called indefinitely
function draw() {
   background(51);

   s.death();
   s.update();
   s.show();

   if (s.eat(food)) {
      pickLocation();
   }

   // draw the food vector
   fill(255, 0, 100);
   rect(food.x, food.y, scl, scl);
}

// moves the snake object based on what key was pressed
function keyPressed() {
   if (keyCode === 38) { // up arrow
      if (((s.xSpeed === 0) && (s.ySpeed === -1))) {
      } else {
         s.dir(0, -1);
      }
   } else if (keyCode === 40) { // down arrow
      if (((s.xSpeed === 0) && (s.ySpeed === 1))) {
      } else {
         s.dir(0, 1);
      }
   } else if (keyCode === 37) { // left arrow
      if (((s.xSpeed === -1) && (s.ySpeed === 0))) {
      } else {
         s.dir(-1, 0);
      }
   } else if (keyCode === 39) { // right arrow
      if (((s.xSpeed === 1) && (s.ySpeed === 0))) {
      } else {
         s.dir(1, 0);
      }
   } else if (keyCode === 80) { // p key (to pause)
      //pickLocation();
      pause = !pause;
   }
}