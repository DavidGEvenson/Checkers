function Square(r, c, g) {
    var that = this;
    var row = r;
    var col = c;
    var valid = false;
    this.game = g;

    var square = "#sq" + row.toString() + col.toString();

    $(square).click(function() {
        //console.log("square: " + col + " " + row);
        that.game.hit(row, col);
    });

    this.isValid = function () {
        return valid;
    };

    this.setValid = function (bol) {
        valid = bol;
    }
}