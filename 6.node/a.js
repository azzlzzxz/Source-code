function sum() {}
module.exports = sum;

//内部会默认在函数外再套一层
(function() {
    function sum() {}
    module.exports = sum;
    return module.exports;
})