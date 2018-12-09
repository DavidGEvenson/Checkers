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