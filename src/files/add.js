import {writeFile} from "fs/promises";
import {invalidInputError, operationFailedError} from "../common/errors.js";
import path from "path";
import {getCurrentPath} from "../state/state.js";

export const add = async (args) => {
    if (args.length !== 1) {
        throw invalidInputError(`wrong arguments for "add" command: ${args}`)
    }

    const resolvedPath = path.resolve(getCurrentPath(), args[0]);

    try {
        await writeFile(resolvedPath, '');
    } catch(err) {
        throw operationFailedError(`An error on creating file: ${resolvedPath}`);
    }
}
