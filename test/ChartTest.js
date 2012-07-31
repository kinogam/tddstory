/// <reference path="../tdd-vsdoc.js" />
var assert;
var Chart;
if (typeof require !== 'undefined') {
    assert = require("assert");
    Chart = require("./../Chart.js");
}


suite("Chart", function () {
    suite("#checkout", function () {
        var data;

        setup(function () {
            data = [{ id: '1', name: '逻辑与计算机设计基础', price: 50, number: 3 },
            { id: '2', name: '3D游戏编程大师技巧', price: 150, number: 1}]; 
            Chart.init();
        });

        test("获取总价", function () {
            Chart.add(data);
            assert.equal(Chart.totalPrice(), 300);

            Chart.add({ id: '3', name: '产品经理修炼之道', price: 30, number: 1 });
            assert.equal(Chart.totalPrice(), 330);
        });

        test("移除商品", function () {
            Chart.add(data);
            Chart.remove("2");
            assert.equal(Chart.totalPrice(), 150);
        });

        test("修改商品数量", function () {
            Chart.add(data);
            Chart.changeNum("1", 2);
            assert.equal(Chart.totalPrice(), 250);
        });

        test("导出当前的商品列表", function () {
            Chart.add(data);
            var exportData = Chart.getProductList();
            assert.equal(exportData.length, 2);
            assert.equal(exportData[0].name, '逻辑与计算机设计基础');
            assert.equal(exportData[1].name, '3D游戏编程大师技巧');
        });

        test("添加相同的书的时候，只修改书的数量，不插入列表", function () {
            Chart.add(data);
            Chart.add({ id: '1', name: '逻辑与计算机设计基础', price: 50, number: 1 });
            var exportData = Chart.getProductList();
            assert.equal(exportData.length, 2);
            assert.equal(exportData[0].number, 4);

            Chart.add([{ id: '2', name: '3D游戏编程大师技巧', price: 150, number: 2},
            { id: '3', name: '产品经理修炼之道', price: 30, number: 3 }]);
            exportData = Chart.getProductList();
            assert.equal(exportData.length, 3);
            assert.equal(exportData[1].number, 3);
        });
    });
});



