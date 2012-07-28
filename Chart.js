(function (window) {
    var amount = 0;

    var c = {
        add: function (goods) {
            if (Object.prototype.toString.call(goods) === '[object Array]') {
                for (var i = 0; i < goods.length; i++) {
                    amount += goods[i].price * goods[i].number;
                }
            }
            else {
                amount += goods.price * goods.number;
            }
        },
        totalPrice: function () {
            return amount;
        }
    };

    if (typeof module != 'undefined' && module.exports) {
        module.exports = c;
    }
    else {
        window.Chart = c;
    }
})(this);