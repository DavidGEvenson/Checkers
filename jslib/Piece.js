function Piece(i, color, g, x) {
    var that = this;
    var id = i;
    var team = color;
    var game = g;
    this.locX = x;
    this.locY = i;

    $("#" + team + "piece" + id.toString()).click(function() {
        console.log(that.locX + " " + that.locY);
    });

}

Piece.prototype.move = function(loc) {
    this.locX = loc[0];
    this.locY = loc[1];
};