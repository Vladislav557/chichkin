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
    // npm install --save-dev @babel/core @babel/node @babel/cli @babel/preset-env
    childProcess.exec('npm install --save-dev @babel/core @babel/node @babel/cli @babel/preset-env', (error, stdout, stderr) => {
        cb(error, { stdout, stderr, message: "Добавленны зависимости: babel"});
    });
    
    // npm install --save-dev eslint
    childProcess.exec('npm install --save-dev eslint', (error, stdout, stderr) => {
        cb(error, { stdout, stderr, message: "Добавленна зависимость: eslint" });
    });
    
};