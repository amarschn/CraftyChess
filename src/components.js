
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
		return this;
	}
});

Crafty.c('Selectable', {
	init: function() {
		this.requires('Mouse');
		// Tells whether the piece has been selected or not
		this.selected = false;

		this.bind('MouseDown', function() {
			if (this.selected === false) {
				this.selected = true;
				this.setColor(this.red, this.green, 255);
				console.log("select");
			}
			else {
				console.log("already selected");
			}
		})
	},

	setColor: function(red, green, blue) {
		this.color('rgb('+red+','+green+','+blue+')');
		this.red = red;
		this.green = green;
		this.blue = blue;
		return this;
	},

	setUnselected: function() {
		this.color('rgb(10, 10, 10)');
		return this;
	}

});

Crafty.c('Tile', {
	init: function() {
		this.requires('2D, Canvas, Grid, Color');
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
		return this;
	}
});

Crafty.c('Piece', {
	init: function() {
		this.requires('2D, Canvas, GridLocation, Color, Selectable, Draggable');
		// Set the location of the piece, the z number allows the piece to be on top of the board
		this.attr({
			w: 20,
			h: 20,
			z: 1
		});
		this.bind('MouseUp', function() {
			console.log(this.x, this.y, Math.floor(this.x/Game.map_grid.tile.width), 
				Math.floor(this.y/Game.map_grid.tile.height));
			this.at(Math.floor(this.x/Game.map_grid.tile.width), 
				Math.floor(this.y/Game.map_grid.tile.height));
			this.setUnselected();
		})
	}
});


