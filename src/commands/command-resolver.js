import {commandsMapping} from "./commands-mapping.js";
import {operationFailedError} from "../common/errors.js";

export const resolveAndExecute = async (input) => {
    const inputData = input.split(' ');
    const command = inputData[0];
    const args = inputData.splice(1);
    const resolution = commandsMapping[command];
    if (resolution) {
        try {
            await resolution(args);
        } catch (err) {
            throw err;
        }
    } else {
        throw operationFailedError(`Unknown command ${command}`);
    }
}
