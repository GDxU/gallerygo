'use strict';

var pkg = require('./pkg');

module.exports = function (grunt, options) {
    return {
        dist: ["dist/"],
        pre: ['dist/*.pre.js']
    };
};

//# sourceMappingURL=clean-compiled.js.map