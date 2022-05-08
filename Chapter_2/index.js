const fs = require("fs");
const path = require("path");

// fs.readFile("./files/starter.txt", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

fs.readFile(
    path.join(__dirname, "files", "starter.txt"),
    "utf-8",
    (err, data) => {
        if (err) throw err;
        console.log(data);
    }
);

console.log("Hiiiiiiiiiii");

fs.writeFile(
    path.join(__dirname, "files", "newFile.txt"),
    "I'm writing a text file",
    (err) => {
        if (err) throw err;
        console.log("Write mission accomplished!");
    }
);

fs.appendFile(
    path.join(__dirname, "files", "appending.txt"),
    "I'm appending a text to file",
    (err) => {
        if (err) throw err;
        console.log("Append mission accomplished!");
    }
);

// Exit on uncaught errors
process.on("uncaughtException", (err) => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
});
