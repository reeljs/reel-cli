const pkg = require('../package.json');
function getVersion() {
    return pkg.version;
}
    
export default getVersion
module.exports = getVersion