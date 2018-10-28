const Test = require('assert');
const make = require('./make');


describe("make", function () {
    it("make", function () {
        Test.assertEquals(make(1, 1), 2, "optional message");
    });
    it("make", function () {
        Test.assertEquals(make(1, 2), 3, "optional message");
    });
    it("make", function () {
        Test.assertEquals(make(1, 2, 3), 7, "optional message");
    });

});