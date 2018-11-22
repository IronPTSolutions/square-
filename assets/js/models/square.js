function Square(ctx, x, y) {
  this.ctx = ctx;
  this.x = x || 0;
  this.y = y || 0;
  this.width = 50;
  this.height = 50;

  this.vx = 0;
  this.vy = 0;

  this.movements = {
    up: false,
    down: false,
    right: false,
    left: false
  }
}

Square.prototype.onKeyEvent = function (event) {
  console.log();
  var state = event.type === 'keydown' ? true : false;
  switch (event.keyCode) {
    case KEY_UP:
      this.movements.up = state;
      break;
    case KEY_DOWN:
      this.movements.down = state;
      break;
    case KEY_LEFT:
      this.movements.left = state;
      break;
    case KEY_RIGHT:
      this.movements.right = state;
      break;
  }
}

Square.prototype.animate = function() {
  if (this.movements.up) {
    this.vy = -SPEED_MOVE;
  }

  if (this.movements.down) {
    this.vy = SPEED_MOVE;
  }

  if (this.movements.right) {
    this.vx = SPEED_MOVE;
  }

  if (this.movements.left) {
    this.vx = -SPEED_MOVE;
  }

  this.x += this.vx;
  this.y += this.vy;
  this.vx *= FRICTION;
  this.vy *= FRICTION;
}

Square.prototype.collideWith = function(obstacle) {
  return this.x < obstacle.x + obstacle.width &&
    this.x + this.width > obstacle.x &&
    this.y < obstacle.y + obstacle.height &&
    this.height + this.y > obstacle.y;
}

Square.prototype.draw = function() {
  this.animate();

  this.ctx.fillRect(
    this.x,
    this.y,
    this.width,
    this.height
  )
}