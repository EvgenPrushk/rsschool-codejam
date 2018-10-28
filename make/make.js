function make(a) {
    /* http://www.codewars.com/kata/a-chain-adding-function/train/javascript*/
    function fn(b) {
        return make(a + b)
    };
    fn.valueOf = function () {
        return a
    };
    return fn;
}
module.exports = make;