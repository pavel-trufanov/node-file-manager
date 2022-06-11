import path from "path";
import {getCurrentPath} from "../state/state.js";
import {access} from "fs/promises";
import {constants} from "fs";
import {operationFailedError} from "./errors.js";

export const resolvePath = async (pathToResolve) => {
    const resolvedPath = path.resolve(getCurrentPath(), pathToResolve);

    try {
        await access(resolvedPath, constants.F_OK);
        return resolvedPath;
    } catch (err) {
        throw operationFailedError(`Path not found: ${resolvedPath}`);
    }
}
