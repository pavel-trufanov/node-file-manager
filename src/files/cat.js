import {createReadStream} from "fs";
import {invalidInputError} from "../common/errors.js";
import {resolvePath} from "../common/path-resolver.js";

export const cat = async (args) => {
    if (args.length !== 1) {
        throw invalidInputError(`wrong arguments for "cat" command: ${args}`)
    }

    try {
        const resolvedPath = await resolvePath(args[0]);
        const readStream = createReadStream(resolvedPath);

        await new Promise((resolve)=>{
            (readStream.on('end',()=>{
                resolve();
            })).pipe(process.stdout)
        });
    } catch (err) {
        throw err;
    }
}
