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
    fs.mkdir('./dist', {recursive: true}, (err) => {
        cb(err, {message: "Папка dist создана"});
    });

    fs.mkdir('./src', {recursive: true}, (err) => {
        cb(err, { message: "Папка src создана" });
    });

    fs.writeFile('.gitignore', 'dist', (err1) => {
        fs.appendFile('.gitignore', 'node_modules', (err2) => {
            cb(err1 + err2, { message: '.gitignore создан' });
        });
    });

    setTimeout(func, 1000);
};

