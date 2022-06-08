import {invalidInputError} from "../common/errors.js";
import {resolvePath} from "../common/path-resolver.js";
import path from "path";
import {getCurrentPath} from "../state/state.js";
import {unlink} from "fs/promises";
import {createReadStream, createWriteStream} from "fs";
import {pipeline} from "stream/promises";

export const mv = async (args) => {
    if (args.length !== 2) {
        throw invalidInputError(`wrong arguments for "mv" command: ${args}`)
    }

    const [src, dest] = args;
    try {
        const srcPath = await resolvePath(src);
        const srcFileName = path.basename(srcPath);
        const destPath = path.resolve(getCurrentPath(), dest, srcFileName);
        const readStream = createReadStream(srcPath);
        readStream.on('end', () => {
            unlink(srcPath);
        })
        const writeStream = createWriteStream(destPath);
        await pipeline(readStream, writeStream);
    } catch (err) {
        throw err;
    }
}
