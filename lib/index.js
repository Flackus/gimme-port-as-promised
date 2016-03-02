'use strict';
var gimme = require('gimme-port'),
    Vow = require('vow');

module.exports = function() {
    var defer = Vow.defer();

    gimme(function(err, port) {
        if (err) {
            defer.reject(err);
        }
        defer.resolve(port);
    });

    return defer.promise();
};
