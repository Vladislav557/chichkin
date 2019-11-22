import { promises as fs } from 'fs';

import changePackage from './changePackage';
import cli from './cli_function';
import template from './template';

export default () => {

    fs.mkdir('dist')
        .then(() => console.log("Создано: директория dist"))
        .catch((error) => console.log(error));

    fs.mkdir('src/bin', { recursive: true })
        .then(() => {
            console.log("Создано: директории src/bin")
            fs.writeFile('src/bin/index.js', '')
                .then(() => console.log('Создано: файл index.js'))
                .catch((error) => console.log(error));
        }).catch((error) => console.log(error));

    fs.writeFile('.gitignore', 'dist\nnode_modules')
        .then(() => console.log('Создано: файл .gitignore'))
        .catch((error) => console.log(error));

    fs.writeFile('babel.config.js', template.babel)
        .then(() => console.log('Создано: файл babel.config.js'))
        .then(() => cli())
        .then(() => changePackage())
        .catch((error) => console.log(error));
};


