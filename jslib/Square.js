function Square(r, c, g) {
    var that = this;
    var row = r;
    var col = c;
    var game = g;



    $("#sq" + row.toString() + col.toString()).click(function() {
        //console.log("square: " + row + " " + col);
    });

    this.getLoc = function() {
        return [r,c];
    }
}