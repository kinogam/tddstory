(function (window) {
    var productList = [];

    var c = {
        init: function () {
            productList = [];
        },
        add: function (goods) {
            if (Object.prototype.toString.call(goods) === '[object Array]') {
                productList.push.apply(productList, goods);
            }
            else {
                productList.push(goods);
            }
        },
        totalPrice: function () {
            var amount = 0;
            for (var i = 0; i < productList.length; i++) {
                amount += productList[i].price * productList[i].number;
            }
            return amount;
        },
        remove: function (id) {
            for (var i = 0; i < productList.length; i++) {
                if (productList[i].id == id) {
                    productList.splice(i, 1);
                    break;
                }
            }
        }
    };

    if (typeof module != 'undefined' && module.exports) {
        module.exports = c;
    }
    else {
        window.Chart = c;
    }
})(this);