'use strict';

module.exports = function (grunt, options) {
    return {
        diagram: {
            files: {
                "dist/architecture": ["dist/<%= pkg.name %>.js"]
            }
        }
    };
};

//# sourceMappingURL=angular_architecture_graph-compiled.js.map