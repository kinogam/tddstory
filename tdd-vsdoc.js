function suite(name, fn) {
    ///<summary>
    ///set testing suite
    ///</summary>
};

function test(name, fn) {
};

function setup(fn) {
};

function teardown(fn) {
};


(function(){

var require = this.require = function (modelName) {
        ///<summary>
        ///To require modules.
        ///</summary>
        ///<param name="modelName" type="String">
        ///A reference to the current module
        ///</param>
        var model;
        eval("model=" + modelName);
        return model;
    };

var assert = {
        fail : function(actual, expected, message, operator) { },
        ok : function(value, message) { },
        equal : function(actual, expected, message) { },
        notEqual : function(actual, expected, message) { },
        deepEqual : function(actual, expected, message) { },
        notDeepEqual : function(actual, expected, message) { },
        strictEqual : function(actual, expected, message) { },
        notStrictEqual : function(actual, expected, message) { },
        throws : function(block, error, message) { },
        doesNotThrow : function(block, error, message) { },
        ifError : function(value) { }
    };

})();