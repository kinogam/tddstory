(function (window) {
    var c = {
        add: function (goods) {

        },
        totalPrice: function () {
            return 300;
        }
    };

    if (typeof module != 'undefined' && module.exports) {
        module.exports = c;
    }
    else {
        window.Chart = c;
    }
})(this);