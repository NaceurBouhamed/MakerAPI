const cors = require('cors');

const spawn = require('child_process').spawn;

/* const sai = spawn('sai', ['cups','--from=0x6c0735adadd37bfc345cfdf6ef1138eb9f260595'],{
    shell: true});

const init = require('./services/__init') */

const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

const bodyParser = require('body-parser');

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const userRoutes = require('./routes/cdpRoutes'); //importing route

userRoutes(app); //register the route




app.listen(port, function () {
    // sai.stdout.on('data', function (data) {
    //     console.log('cups: ' + data);
    // })
    // sai.stderr.on('data', function (data) {
    //     console.log('cups: ' + data);
    // })


    console.log('API server started on: ' + port);
});