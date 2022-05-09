const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

// dev dependecies - npm i nodemon -D | npm i nodemon --save-dev

// dependencies:
// * keep it always up to date
// ^1.0.0 updates the minor and patch versions only
// ~1.0.0 updates only the patch version
// 1.0.0 uses strictly the current version
// Install the specific version: npm i uuid@8.3.1
// Update packages: npm update
// Uninstall packages: npm rm nodemon -D | npm rm nodemon -g | npm rm uuid

console.log(format(new Date(), "dd/MM/yyyy\tHH:mm:ss"));
console.log(uuid());
