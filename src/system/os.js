import * as osData from 'os';
import {invalidInputError, operationFailedError} from "../common/errors.js";

export const os = async (args) => {
    if (args.length !== 1) {
        throw invalidInputError(`wrong arguments for "cp" command: ${args}`)
    }
    const arg = args[0];

    switch (arg) {
        case '--EOL':
            console.log(JSON.stringify(osData.EOL));
            break;
        case '--cpus':
            const cpus = osData.cpus();
            const output = {
                cores: cpus.length,
                model: cpus.map(cpu => cpu.model)
            }
            console.log(output);
            break;
        case '--homedir':
            console.log(osData.homedir());
            break;
        case '--username':
            console.log(osData.userInfo().username);
            break;
        case '--architecture':
            console.log(process.arch);
            break;
        default: throw operationFailedError(`Unknown argument for "os" command: ${arg}`)
    }
}
