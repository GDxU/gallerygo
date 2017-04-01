'use strict';

var karmaLib = require('karma');
//<=0.12 || //^0.13
var twelveKarma = karmaLib.server ? karmaLib.server.start : undefined;
var thirteenKarma = karmaLib.Server || undefined;
var Karma = thirteenKarma || twelveKarma;

// console.log(Karma,true);
module.exports = function (pathToKarmaFile, grunt) {
    var log;
    log = grunt.log.oklns;
    return function (done, karmaConf) {
        var e, server;
        if (karmaConf == null) {
            karmaConf = require.resolve(pathToKarmaFile);
        }
        log('-- Karma Setup --');
        try {
            server = new Karma({
                configFile: karmaConf,
                singleRun: true
            }, function (code) {
                log("Karma Callback Code: " + code);
                done(!code ? void 0 : false);
            });
            if (server.start) server.start(); //^0.13
        } catch (_error) {
            e = _error;
            log("KARMA ERROR: " + e);
            return done(false);
        }
    };
};

//# sourceMappingURL=karma-compiled.js.map