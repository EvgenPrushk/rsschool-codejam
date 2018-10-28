const assert = require('assert');
const recursion = require('./recursion');

describe('recursion', () => {
    let tree = {
        "value": 100,
        "left": {
            "value": 90,
            "left": {
                "value": 70
            },
            "right": {
                "value": 99
            }
        },
        "right": {
            "value": 120,
            "left": {
                "value": 110
            },
            "right": {
                "value": 130
            }
        }
    };

    it('should pass', () => {
        assert.deepEqual(recursion(tree), [
            [100],
            [90, 120],
            [70, 99, 110, 130]
        ])
    });

});