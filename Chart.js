(function (window) {
    var productList = [];

    var c = {
        init: function () {
            productList = [];
        },
        add: function (goods) {
            if (Object.prototype.toString.call(goods) === '[object Array]') {
                for (var i = 0; i < productList.length; i++) {
                    for (var j = 0; j < goods.length; j++) {
                        if (productList[i].id == goods[j].id) {
                            productList[i].number += goods[j].number;
                            goods.splice(j, 1);
                            break;
                        }
                    }
                    if (goods.length == 0) {
                        return;
                    }
                }
                productList.push.apply(productList, goods);
            }
            else {
                for (var i = 0; i < productList.length; i++) {
                    if (productList[i].id == goods.id) {
                        productList[i].number += goods.number;
                        return;
                    }
                }
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
        },
        changeNum: function (id, num) {
            for (var i = 0; i < productList.length; i++) {
                if (productList[i].id == id) {
                    productList[i].number = num;
                    break;
                }
            }
        },
        getProductList: function () {
            return productList;
        }
    };

    if (typeof module != 'undefined' && module.exports) {
        module.exports = c;
    }
    else {
        window.Chart = c;
    }
})(this);