function add(n) {
/* http://www.codewars.com/kata/a-chain-adding-function/train/javascript*/
    function fn(n) {
        return add(x + n)
    };
    fn.valueOf = function () {
        return x
    };
    return fn;
}