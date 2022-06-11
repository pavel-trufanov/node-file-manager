import {invalidInputError} from "../common/errors.js";
import {resolvePath} from "../common/path-resolver.js";
import path from "path";
import {getCurrentPath} from "../state/state.js";
import {rename} from "fs/promises";

export const rn = async (args) => {
    if (args.length !== 2) {
        throw invalidInputError(`wrong arguments for "rn" command: ${args}`)
    }

    const [fileName, newName] = args;
    try {
        const resolvedFileName = await resolvePath(fileName);
        const newFileName = path.resolve(getCurrentPath(), newName);
        await rename(resolvedFileName, newFileName);
    } catch (err) {
        throw err;
    }
}
