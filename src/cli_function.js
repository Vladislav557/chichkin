import childProcess from 'child_process';

import cb from './callback';

export default () => {
    // npm init
    childProcess.exec('npm init -y', (error, stdout, stderr) => {
        cb(error, { stdout, stderr, message: 'Инициализирован: npm'} );
    });
    // git init
    childProcess.exec('git init', (error, stdout, stderr) => {
        cb(error, { stdout, stderr, message: "Инициализирован: git" });
    });
    // npm install --save-dev @babel/core
    childProcess.exec('npm install --save-dev @babel/core', (error, stdout, stderr) => {
        cb(error, { stdout, stderr, message: "Добавленна зависимость: @babel/core"});
    });
    // npm install --save-dev @babel/cli
    childProcess.exec('npm install --save-dev @babel/cli', (error, stdout, stderr) => {
        cb(error, { stdout, stderr, message: "Добавленна зависимость: @babel/cli"});
    });
    // npm install --save-dev @babel/node
    childProcess.exec('npm install --save-dev @babel/node', (error, stdout, stderr) => {
        cb(error, { stdout, stderr, message: "Добавленна зависимость: @babel/node"});
    });
    // npm install --save-dev @babel/preset-env
    childProcess.exec('npm install --save-dev @babel/preset-env', (error, stdout, stderr) => {
        cb(error, { stdout, stderr, message: "Добавленна зависимость: @babel/preset-env"});
    });
    // npm install --save-dev eslint
    childProcess.exec('npm install --save-dev eslint', (error, stdout, stderr) => {
        cb(error, { stdout, stderr, message: "Добавленна зависимость: eslint" });
    });
    
};