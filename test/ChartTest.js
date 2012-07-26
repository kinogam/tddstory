﻿/// <reference path="../tdd-vsdoc.js" />
var assert;
var Chart;
if (typeof require !== 'undefined') {
    assert = require("assert");
    Chart = require("./../Chart.js");
}


suite("Chart", function () {
    suite("#checkout", function () {
        test("获取总价", function () {
            var data = [{ id: '1', name: '逻辑与计算机设计基础', price: 50, number: 3 },
            { id: '2', name: '3D游戏编程大师技巧', price: 150, number: 1}];
            Chart.add(data);
            assert.equal(Chart.totalPrice(), 300);

            Chart.add({id: '3', name: '产品经理修炼之道', price: 30, number: 1});
            assert.equal(Chart.totalPrice(), 330);
        });
    });
});