import fs = require('fs');
import path = require('path');
interface ICreatePackageJsonOptions {
    dir: string;
    name: string;
    description: string;
    version: string;
    license: string;
}
function createPackageJson(options: ICreatePackageJsonOptions) {
    fs.writeFileSync(path.join(options.dir, 'package.json'), JSON.stringify({
        dir: options.dir,
        name: options.name,
        description: options.description,
        version: options.version,
        license: options.license,
        scripts: {
            start: 'reel start',
            build: 'reel build',
        },
        keywords: [],
    }, null, 2));
}

export default createPackageJson;