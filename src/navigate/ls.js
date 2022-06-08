import {readdir} from "fs/promises";
import {getCurrentPath} from "../state/state.js";

export const ls = async () => {
    const files = await readdir(getCurrentPath());
    for (const file of files) {
        console.log(file);
    }
}
