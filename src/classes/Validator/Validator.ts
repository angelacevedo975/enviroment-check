require("dotenv").config();

interface CheckResponse {
    status: "SUCCESS" | "ERROR";
    message?: string;
    errors?: Array<string>;
}

class Validator {
    isValid(property: string): boolean {
        return Boolean(process.env[property]);
    }

    check(variable: Array<string>): CheckResponse {
        const errors: Array<string> = [];

        variable.forEach((item) => {
            if (!this.isValid(item)) {
                errors.push(`Variable is missing!! -> ${item}`);
            }
        });

        const response: CheckResponse = {
            status: errors.length ? "ERROR" : "SUCCESS",
            ...(errors.length
                ? { errors }
                : {
                      message:
                          "Great! All the enviroment variables look to be present!"
                  })
        };
        return response;
    }
}

export default Validator;
