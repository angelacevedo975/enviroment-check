import DotEnvReader from "./FileReader/DotEnvReader";
const path = require("path");

export const Greeter = (name: string) => `Hello ${name}`;

function getRootDirectory(): string {
    return path.resolve(__dirname, "../.env.example");
}

const reader = new DotEnvReader(getRootDirectory());
reader.getFile();
