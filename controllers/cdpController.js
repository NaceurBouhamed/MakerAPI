'use strict';

const cdpService = require('../services/cdpService');

const testService = require('../services/__init');

exports.getInfo = function (req, res) {
    
    let a = testService.testLoadEnv();
    res.json(a);
};

