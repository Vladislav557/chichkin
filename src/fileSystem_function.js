import fs from 'fs';
import cb from './callback';

const func = () => {
    fs.readFile('package.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        } 
        const packageObj = JSON.parse(data);
        const updateData = JSON.stringify({ ...packageObj, "files": ["dist"] });
        fs.writeFile('package.json', updateData, (err) => {
            if (err) {
                console.log(err);
                return;
            }
        });
    });
};

export default () => {
    fs.mkdir('./dist/bin', {recursive: true}, (err) => {
        cb(err, {message: "Директории dist/bin созданы"});
    });

    fs.mkdir('./src', {recursive: true}, (err) => {
        cb(err, { message: "Папка src создана" });

        fs.writeFile('src/bin/index.js', '', (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });
    });

    fs.writeFile('.gitignore', 'dist', (err1) => {
        fs.appendFile('.gitignore', 'node_modules', (err2) => {
            cb(err1 + err2, { message: '.gitignore создан' });
        });
    });

    fs.appendFile("babel.config.js", "module.exports = {presets: [[\"@babel/env\",{targets:{node: \"current\",firefox: \"60\",chrome: \"67\",safary: \"11.1\",},}],],}", (err) => {
        cb(err, { message: 'Создан babel.config.js' });
    });

    setTimeout(func, 1000);
};

