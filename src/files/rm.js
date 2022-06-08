import {invalidInputError} from "../common/errors.js";
import {unlink} from "fs/promises";
import {resolvePath} from "../common/path-resolver.js";

export const rm = async (args) => {
    if (args.length !== 1) {
        throw invalidInputError(`wrong arguments for "rm" command: ${args}`)
    }

    try {
        const resolvedPath = await resolvePath(args[0]);
        await unlink(resolvedPath);
    } catch (err) {
        throw err;
    }
}
