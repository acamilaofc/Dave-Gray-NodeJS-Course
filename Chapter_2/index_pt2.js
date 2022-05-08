const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(
            path.join(__dirname, "files", "lorem.txt"),
            "utf-8"
        );
        console.log(data);
        await fsPromises.writeFile(
            path.join(__dirname, "files", "awaitedWrite.txt"),
            "Crazy examples this guy gives"
        );
        await fsPromises.appendFile(
            path.join(__dirname, "files", "awaitedWrite.txt"),
            "\nHe is crazy"
        );
    } catch (err) {
        console.error(err);
    }
};

fileOps();

// unlink = delete
// await fsPromises.unlink(path.join(__dirname, "files", "awaitedWrite.txt"));
