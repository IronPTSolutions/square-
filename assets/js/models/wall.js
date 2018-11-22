function Wall(ctx, x, y, height) {
  this.ctx = ctx;
  this.x = x || 0;
  this.y = y || 0;
  this.width = 50;
  this.height = height || 400;

  this.vx = WALL_SPEED_MOVE;
}

Wall.prototype.animate = function() {
  this.x -= this.vx;
}

Wall.prototype.draw = function() {
  this.animate();

  this.ctx.fillRect(
    this.x,
    this.y,
    this.width,
    this.height
  )
}