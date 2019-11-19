import { promises as fs } from 'fs';

import changePackage from './changePackage';
import cli from './cli_function';
import { babel } from './template';

export default () => {

    fs.mkdir('dist')
        .then(() => console.log("Директория dist создана"))
        .catch((error) => console.log(error));

    fs.mkdir('src/bin', { recursive: true })
        .then(() => {
            fs.writeFile('src/bin/index.js', '')
                .then(() => console.log('index.js создан'))
                .catch((error) => console.log(error));
        }).catch((error) => console.log(error));

    fs.writeFile('.gitignore', 'dist \n node_modules')
        .then(() => console.log('.gitignore создан'))
        .catch((error) => console.log(error));

    fs.writeFile('babel.config.js', babel)
        .then(() => console.log('babel.config.js создан'))
        .catch((error) => console.log(error));

    setTimeout(cli, 1000);
    setTimeout(changePackage, 2000);
};


