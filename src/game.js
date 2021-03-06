// Here we go

Game = {
	
	// Make a grid
	map_grid: {
		width: 8,
		height: 8,
		tile: {
			width: 50,
			height: 50
		}
	},

	// This returns the width of the game space in pixels
	width: function() {
		return (this.map_grid.width * this.map_grid.tile.width);
	},

	height: function() {
		return (this.map_grid.height * this.map_grid.tile.height);
	},

	// initialize and start our game
	start: function() {
		Crafty.init(Game.width(), Game.height());
		Crafty.background('rgb(140,120,80)');

		// Set up the game board
		for (var x = 0; x < Game.map_grid.width; x++) {
			for (var y = 0; y < Game.map_grid.height; y++) {
				if (x%2 === 0 && y%2 !== 0 || x%2 !== 0 && y%2 === 0) {
					Crafty.e("Tile").at(x, y).color('rgb(200,200,200)');
				}
				if (x%2 !== 0 && y%2 !== 0 || x%2 === 0 && y%2 === 0) {
					Crafty.e("Tile").at(x, y).color('rgb(100,100,100)');
				}

				// Adds pieces to the top and bottom of the chessboard
				if (y === 0 || y === 1 || y === 6 || y === 7) {
					Crafty.e("Piece").at(x, y).setColor(10,10,10);
				}
			}
		}
	}
}

console.log("poopypants")