const os = require("os");
const path = require("path");
const { sum, subtract, multiply, divide } = require("./math");
// ------------------------------------------------------------------

console.log(os.type());
console.log(os.version());
console.log(os.homedir());
// ------------------------------------------------------------------

console.log(__dirname);
console.log(__filename);
// ------------------------------------------------------------------

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
// ------------------------------------------------------------------

console.log(path.parse(__filename));
// ------------------------------------------------------------------

console.log(sum(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));
