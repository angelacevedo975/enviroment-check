import DotEnvReader from "./classes/FileReader/DotEnvReader";
import Validator from "./classes/Validator/Validator";
const path = require("path");

export const Greeter = (name: string) => `Hello ${name}`;

function getRootDirectory(): string {
    return path.resolve(__dirname, "../.env.example");
}

async function main() {
    const reader = new DotEnvReader(getRootDirectory());
    const variables = await reader.getFile();
    const validator = new Validator();
    console.log(validator.check(variables));
}

main()