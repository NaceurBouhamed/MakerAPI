module.exports = function (app) {
    var cdpController = require('../controllers/cdpController');

    // todoList Routes
    app.route('/cdp/:cdpnumber')
        .get(cdpController.getInfo);

};
