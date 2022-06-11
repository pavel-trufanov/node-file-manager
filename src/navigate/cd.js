import {invalidInputError} from "../common/errors.js";
import {resolvePath} from "../common/path-resolver.js";
import {setCurrentPath} from "../state/state.js";

export const cd = async (args) => {
    if (args.length !== 1) {
        throw invalidInputError(`wrong arguments for "cp" command: ${args}`)
    }

    try {
        const resolvedPath = await resolvePath(args[0]);
        setCurrentPath(resolvedPath);
    } catch (err) {
        throw err;
    }
}
