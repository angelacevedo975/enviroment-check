import { FileReader } from "./index";
const readline = require("readline");
const fs = require("fs");

class DotEnvReader implements FileReader {
    pathToFile: string;

    constructor(pathToFile: string) {
        this.pathToFile = pathToFile;
    }

    public async getFile(): Promise<Array<string>> {
        return new Promise((resolve, reject) => {
            try {
                const lines: Array<string> = [];
                const reader = readline.createInterface({
                    input: fs.createReadStream(this.pathToFile),
                    output: process.stdout,
                    terminal: false
                });
                reader.on("line", (line: string) => {
                    const variable = line.split("=")[0];
                    lines.push(variable);
                });
                reader.on("close", () => resolve(lines));
            } catch (e: any) {
                console.log("Error ->", e.message);
                reject(e.message);
            }
        });
    }
}

export default DotEnvReader;
