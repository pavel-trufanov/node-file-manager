import {invalidInputError} from "../common/errors.js";
import {createBrotliDecompress} from "zlib";
import {resolvePath} from "../common/path-resolver.js";
import path from "path";
import {getCurrentPath} from "../state/state.js";
import {createReadStream, createWriteStream} from "fs";
import {pipeline} from "stream/promises";

export const decompress = async (args) => {
    if (args.length !== 2) {
        throw invalidInputError(`wrong arguments for "decompress" command: ${args}`)
    }

    const [src, dest] = args;

    const decompress = createBrotliDecompress();
    try {
        const srcPath = await resolvePath(src);
        const destPath = path.resolve(getCurrentPath(), dest);
        const readStream = createReadStream(srcPath);
        const writeStream = createWriteStream(destPath);
        await pipeline(readStream, decompress, writeStream);
    } catch (err) {
        throw err;
    }
}
