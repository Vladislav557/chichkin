import { promises as fs } from 'fs';

export default () => {
    fs.readFile('package.json', 'utf8')
        .then((data) => {
            const packageObj = JSON.parse(data);
            const updateData = JSON.stringify({ ...packageObj, files: ["dist"], scripts: {
                "build": "NODE_ENV=production babel src --out-dir dist --source-maps",
                "prepublishOnly": "npm run build",
                "eslint init": "npx eslint --init"
            }});
            fs.writeFile('package.json', updateData)
                .then(() => console.log("package.json настроен"))
                .catch((error) => console.log(error));
        })
};
