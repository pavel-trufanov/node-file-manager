import {createBrotliCompress} from "zlib";
import {createReadStream, createWriteStream} from "fs";
import {pipeline} from "stream/promises";
import {invalidInputError} from "../common/errors.js";
import {resolvePath} from "../common/path-resolver.js";
import path from "path";
import {getCurrentPath} from "../state/state.js";

export const compress = async (args) => {
    if (args.length !== 2) {
        throw invalidInputError(`wrong arguments for "compress" command: ${args}`)
    }

    const [src, dest] = args;

    const compress = createBrotliCompress();
    try {
        const srcPath = await resolvePath(src);
        const destPath = path.resolve(getCurrentPath(), dest);
        const readStream = createReadStream(srcPath);
        const writeStream = createWriteStream(destPath);
        await pipeline(readStream, compress, writeStream);
    } catch (err) {
        throw err;
    }
}
