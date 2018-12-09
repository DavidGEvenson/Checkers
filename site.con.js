/*! DO NOT EDIT checkers 2018-12-07 */
function Game() {
    var whitepieces = [];
    var blackpieces = [];
    var squares = [];

    this.game = [];
    this.turn = "w";
    this.state = "selectPiece";

    this.selectedPiece = null;

    for(var i=0; i<8; i++) {
        var wp = new Piece(i, i%2, "w");
        var bp = new Piece(i, (i%2) + 6, "b");
        whitepieces.push(wp);
        blackpieces.push(bp);
        for(var j=0; j<8; j++) {
            var sq = new Square(i, j, this);
            squares.push(sq);
            if(j===i%2) {
                //sq.setPiece(wp);
                this.game[i.toString() + j.toString()] = wp;
            }
            else if(j===(i%2)+6) {
                //sq.setPiece(bp);
                this.game[i.toString() + j.toString()] = bp;
            }
        }
    }
}

Game.prototype.hit = function(r, c) {
    var loc = r.toString() + c.toString();
    if(this.state === "selectPiece" && this.game[loc] !== undefined
        && this.game[loc].getTeam() === this.turn) {

        this.selectedPiece = this.game[loc];
        this.state = "selectMove";
    }
    else if(this.state === "selectMove" && this.game[loc] === undefined) {
        this.moveSelectedPiece(r,c);

        this.selectedPiece = null;
        this.state = "selectPiece";
    }
};

Game.prototype.moveSelectedPiece = function(r, c) {
    delete this.game[this.selectedPiece.r.toString() +
        this.selectedPiece.c.toString()];

    var loc = r.toString() + c.toString();
    var sq1 = document.getElementById("sq" + loc);
    var sq2 = document.getElementById("sq" + this.selectedPiece.r.toString() +
        this.selectedPiece.c.toString());
    sq2.innerHTML = "";
    sq1.innerHTML = this.selectedPiece.html;

    this.selectedPiece.c = c;
    this.selectedPiece.r = r;

    this.game[loc] = this.selectedPiece;

    if(this.turn === "w")
        this.turn = "b";
    else
        this.turn = "w";
};

/*

Game.prototype.waitForSquareSelection = function (square) {
    this.selectedSquare = square;
    this.state = "selectSquare";
};

Game.prototype.selectSquare = function (square) {
    square.setPiece(this.selectedSquare.getPiece());
    this.selectedSquare.removePiece();

    this.selectedSquare = null;
    this.state = "selectPiece";
};

*/
function Piece(row, col, color) {
    var that = this;
    var id = row;
    var team = color;

    this.c = col;
    this.r = row;

    this.king = false;
    this.html = "<div class=\"piece " + team + "piece\" id=\"" +
        team + "piece" + id + "\"></div>";

    this.getTeam = function () {
        return team;
    }
}

Piece.prototype.move = function(c,r) {
    this.c = c;
    this.r = r;
};

Piece.prototype.getLoc = function () {
    return [this.c, this.r];
};
function Square(r, c, g) {
    var that = this;
    var row = r;
    var col = c;
    this.game = g;

    var square = "#sq" + row.toString() + col.toString();

    $(square).click(function() {
        //console.log("square: " + col + " " + row);
        that.game.hit(row, col);
    });
}