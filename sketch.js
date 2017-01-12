// our Snake object
var s;
// the scale for our visual game
var scl = 20;

// the food the Snake eats
// a vector
var food;

var pause = false;

// sets the location of the food to a random square on the grid
function pickLocation() {
   // this is done to ensure the space picked is on the grid
   var cols = floor(width/scl);
   var rows = floor(height/scl);

   var foodX = floor(random(cols)) * scl;
   var foodY = floor(random(rows)) * scl;

   for (var i = 0; i < s.tail.length; i++) {
      if ((foodX === s.tail[i].x) && (foodY === s.tail[i].y)) {
         foodX = floor(random(cols)) * scl;
         foodY = floor(random(rows)) * scl;

         i = 0;
      }
   }

   food = createVector(foodX, foodY);
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
   s.update(pause);
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
      // if the Snake is moving down, do not allow it to move up (unless it is one unit long)
      if (!((s.xSpeed === 0) && (s.ySpeed === 1)) || (s.total === 0)) {
         s.dir(0, -1);
      }
   } else if (keyCode === 40) { // down arrow
      // if the Snake is already moving up, do not allow it to move down (unless it is one unit long)
      if (!((s.xSpeed === 0) && (s.ySpeed === -1)) || (s.total === 0)) {
         s.dir(0, 1);
      }
   } else if (keyCode === 37) { // left arrow
      // if the Snake is already moving right, do not allow it to move left (unless it is one unit long)
      if (!((s.xSpeed === 1) && (s.ySpeed === 0)) || (s.total === 0)) {
         s.dir(-1, 0);
      }
   } else if (keyCode === 39) { // right arrow
      // if the Snake is already moving left, do not allow it to move right (unless it is one unit long)
      if (!((s.xSpeed === -1) && (s.ySpeed === 0)) || (s.total === 0)) {
         s.dir(1, 0);
      }
   } else if (keyCode === 80) { // p key (to pause)
      pause = !pause;
   } else if (keyCode === 82) {
      pickLocation();
   }
}