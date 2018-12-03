function Game() {
    var whitepieces = [];
    var blackpieces = [];
    var squares = [];

    this.turn = 1;
    this.state = "selectPiece";

    this.selectedPiece = null;

    for(var i=0; i<8; i++) {
        whitepieces.push(new Piece(i, "w", this, i%2));
        blackpieces.push(new Piece(i, "b" , this), (i%2)+6);
        for(var j=0; j<8; j++) {
            squares.push(new Square(i, j, this));
        }
    }
}

Game.prototype.waitForSquareSelection = function (piece) {
    this.selectedPiece = piece;
    this.state = "selectSquare";
};

Game.prototype.selectSquare = function (square) {
    this.

    this.selectedPiece = null;
    this.state = "selectPiece";
};