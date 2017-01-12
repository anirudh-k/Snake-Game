function Snake() {
   // location of the head of the Snake, initialized at a random point on the board
   this.x = floor(random(floor(width/scl))) * scl;
   this.y = floor(random(floor(height/scl))) * scl;

   // speed of the Snake
   this.xSpeed = 0;
   this.ySpeed = 0;

   // length of Snake's tail (starts at 1)
   this.total = 0;

   // the tail of the Snake is an array of vectors
   this.tail = [];

   // sets the 'direction' (speed) of this Snake to the given values
   this.dir = function(x, y) {
      this.xSpeed = x;
      this.ySpeed = y;
   };

   // checks if the Snake has eaten the food at the given location
   // if it has, increments its total field
   this.eat = function(pos) {
      // distance from the Snake head to pos
      var d = dist(this.x, this.y, pos.x, pos.y);

      if (d < 1) {
         this.total++;
         return true;
      } else {
         return false;
      }
   };

   // updates the location of the Snake's head based on its speed fields
   // updates the location of the rest of the Snake's tail by shifting them all up
   this.update = function(pause) {
      if (!pause) {
         for (var i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
         }
         this.tail[this.total - 1] = createVector(this.x, this.y);

         this.x = this.x + this.xSpeed * scl;
         this.y = this.y + this.ySpeed * scl;

         // this.x = constrain(this.x, 0, width - scl);
         // this.y = constrain(this.y, 0, height - scl);
      }
   };

   this.death = function() {
      if ((this.x < 0) || (this.x > width) || (this.y < 0) || (this.y > height)) {
         this.reset();
      }
      for (var i = 0; i < this.tail.length; i++) {
         var pos = this.tail[i];
         var d = dist(this.x, this.y, pos.x, pos.y);
         if (d < 1) {
            this.reset();
         }
      }
   };

   this.reset = function() {
      console.log('starting over');

      this.x = floor(random(floor(width/scl))) * scl;
      this.y = floor(random(floor(height/scl))) * scl;

      this.xSpeed = 0;
      this.ySpeed = 0;

      this.total = 0;
      this.tail = [];
   };

   // draws the Snake
   this.show = function() {
      fill(255);
      for (var i = 0; i < this.tail.length; i++) {
         rect(this.tail[i].x, this.tail[i].y, scl, scl);
      }
      rect(this.x, this.y, scl, scl);

   };
}