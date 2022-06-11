import {createReadStream} from "fs";
import {invalidInputError} from "../common/errors.js";
import {resolvePath} from "../common/path-resolver.js";

const {
    createHash
} = await import('crypto');

export const hash = async (args) => {
    if (args.length !== 1) {
        throw invalidInputError(`wrong arguments for "hash" command: ${args}`)
    }

    try {
        const resolvedFileName = await resolvePath(args[0]);
        const hash = createHash('sha256');
        const readStream = createReadStream(resolvedFileName);

        await new Promise((resolve)=>{
            (readStream.on('end',()=>{
                resolve();
            })).pipe(hash).setEncoding('hex').pipe(process.stdout);
        });
    } catch (err) {
        throw err;
    }
}
