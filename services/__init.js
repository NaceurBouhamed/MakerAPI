const exec = require('child_process').exec;
const spawn = require('child_process').spawn;
const sai = spawn('sai', ['cups']);

var shell = require('shelljs');

if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
}

exports.testLoadEnv = () => {
    let result = shell.exec('sai cups');
    console.log(result);
    return result
}




exports.deployContracts = exec('cd .. && make test',
    (error, stdout, stderr) => {
        console.log(`${stdout}`);
        console.log(`${stderr}`);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
    });




exports.fixEnv = (flag) => {
    if (flag) exec('cd .. && cd sai && source load-env-unknown && source load-fab-unknown && source load-unknown', { shell: '/bin/bash' },
        (error, stdout, stderr) => {
            console.log(`${stdout}`);
            console.log(`${stderr}`);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        })
};