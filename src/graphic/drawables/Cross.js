define(function () {
	function Cross (x, y) {
		this.x = x;
		this.y = y;
	}

	Cross.prototype.onDraw = function(ctx) {
		ctx.strokeStyle = '#fff';
		var c = ctx.canvas;
		ctx.moveTo(this.x, 0);
		ctx.lineTo(this.x, c.height);

		ctx.moveTo(0, this.y);
		ctx.lineTo(c.width, this.y);

		ctx.stroke();
	};

	return Cross;
});