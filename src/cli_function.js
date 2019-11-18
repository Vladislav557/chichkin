import childProcess from 'child_process';
import cb from './callback';


export default () => {
    // git init
    childProcess.exec('git init', (error, stdout, stderr) => {
        cb(error, { stdout, stderr, message: "Git initialized" });
    });
    // npm init
    childProcess.exec('npm init -y', (error, stdout, stderr) => {
        cb(error, { stdout, stderr, message: 'Npm initialized'} );
    });
    // npm install --save-dev @babel/core
    childProcess.exec('npm install --save-dev @babel/core', (error, stdout, stderr) => {
        cb(error, { stdout, stderr, message: "@babel/core installed"});
    });
    // npm install --save-dev @babel/cli
    childProcess.exec('npm install --save-dev @babel/cli', (error, stdout, stderr) => {
        cb(error, { stdout, stderr, message: "@babel/cli installed"});
    });
    // npm install --save-dev @babel/node
    childProcess.exec('npm install --save-dev @babel/node', (error, stdout, stderr) => {
        cb(error, { stdout, stderr, message: "@babel/node installed"});
    });
    // npm install --save-dev @babel/preset-env
    childProcess.exec('npm install --save-dev @babel/preset-env', (error, stdout, stderr) => {
        cb(error, { stdout, stderr, message: "@babel/preset-env installed"});
    });

};