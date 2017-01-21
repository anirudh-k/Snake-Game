# Snake-Game
A snake game made in Javascript using the p5.js framework.

Objective:
  Your snake is the white square. Try to eat as many food pieces (pink squares) as you can!
  If your snake runs into itself, you die!

Controls:
  To start the game, press any of the arrow keys to start moving.
  Arrow keys move your snake in the appropriate direction.
  Press 'P' to pause the game.

Things I want to add in the future:
  Scoreboard (keeps track of your total length)
  Increasing speed as the game progresses
  Choosing difficulties (with different speed and food generation locations)

Code overview:

sketch.js

  setup()
    The game is initialized in the setup() function. setup is called once at the initialization of the program. setup creates
    the canvas, sets the frame rate to 10 (to make the game more playable), and creates a new Snake object. It then assigns a
    random location to the food particle by calling pickLocation().

  draw()
    The game is played in the draw() function. draw is called indefinitely during the execution of the program. draw does 4
    main things:
      1. Checks if the snake has died by running into itself (s.death())
      2. Updates the location of the snake based on the direction it is moving (s.update(pause))
      3. Displays the snake on the canvas (s.show())
      4. Checks if the snake has eaten the food particle (s.eat(food)). If so, it assigns a new random location to the food
         particle.

  keyPressed()
    Built in to p5.js is the field keyCode. This field is updated whenever the user presses a new key. Key codes for all keys
    can be found on this website (http://keycode.info/). This method changes the direction of movement of the snake for arrow
    key presses. It also pauses the game with the 'P' key and moves the food particle with the 'R' key (used for testing).

snake.js

  Snake()
    The Snake object has fields representing its state. x and y are the position of the Snake's head. xSpeed and ySpeed are
    the speed the head moves across the canvas. total is the length of the Snake's tail (add one to total to get the entire
    length of the Snake). tail is an array that stores all the positions of the components of the Snake's tail. These
    positions are represented as vectors (https://p5js.org/reference/#/p5.Vector). A Snake is initially constructed as just a
    head.

  dir()
    Updates the direction of the Snake (xSpeed and ySpeed) based on the values passed into dir().

  eat()
    Determines if the Snake's head (x and y) have passed over the given position (a p5.Vector). If it has, it increments the
    total field by one (making the Snake's tail's length greater by one) and returns true. Otherwise, returns false.

  update()
    Moves the Snake's head based on its direction. Moves the Vectors that make up the Snake's tail based on where the Vector
  ahead of it was.

  death()
    Determines if the Snake's head has left the canvas (lines 54-56) or if it has run into itself (lines 57-63).

  reset()
    Resets the Snake's state. Moves the head to a new random location. Sets its tail length to 0. Starts it with no direction
    (so player can choose when starting a new game).

  show()
    Draws each rectangle of the Snake's head and tail.
