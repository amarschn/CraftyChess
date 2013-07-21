



Crafty.c('Grid', {
	init: function() {
		this.attr({
			w: Game.map_grid.tile.width,
			h: Game.map_grid.tile.height
		});
	},

	at: function(x, y) {
		this.attr({
			x: x*Game.map_grid.tile.width,
			y: y*Game.map_grid.tile.height
		});
	}
});

Crafty.c('WhiteTile', {
	init: function() {
		this.requires('2D, Canvas, Grid, Color');
		this.color('rgb(200, 200, 200)');
	}
});

Crafty.c('GridLocation', {
	init: function() {
		this.requires('2D, Canvas');
	},
	at: function(x, y) {
		var x1 = Game.map_grid.tile.width/2 - this.w/2;
		var y1 = Game.map_grid.tile.height/2 - this.h/2;
		this.attr({
			x: x*Game.map_grid.tile.width + x1,
			y: y*Game.map_grid.tile.height + y1
		});
	}
});

Crafty.c('Piece', {
	init: function() {
		
		this.requires('2D, Canvas, GridLocation, Color');
		this.attr({
			w: 5,
			h: 5
		});
		this.color('rgb(10, 10, 10)');
	}
});

/*
* Need to make a player first
*
*
*
*
* What are the components of a chess piece?
* - Image
* - Movement
* - Death
*
*
*/