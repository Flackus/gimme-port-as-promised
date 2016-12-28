#!/usr/bin/env node
'use strict';
var cp = require('child_process'),
    assert = require('assert'),
    gimmePort = require('../lib/index');

function execSync(cmd) {
    var res = { status: 0 };

    try {
        var out = cp.execSync(cmd);
        res.stdout = out.toString();
    } catch(e) {
        res.stderr = e.stderr.toString();
        res.status = e.status;
    }

    return res;
}

return gimmePort()
    .then(function(port) {
        var cmd = execSync('lsof -i:' + port);

        assert.equal(cmd.status, 1, 'lsof exit status is not 1');
        assert.equal(cmd.stderr, '', 'lsof stderr is not empty');
        assert.equal(cmd.stdout, undefined, 'lsof stdout is present');
    })
    .fail(function(e) {
        console.error(e);
        process.exit(1);
    });
