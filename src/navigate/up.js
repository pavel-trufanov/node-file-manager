import {getCurrentPath, setCurrentPath} from "../state/state.js";
import {dirname} from 'path';

export const up = async () => {
    const currentPath = getCurrentPath();
    const newPath = dirname(currentPath);
    setCurrentPath(newPath);
}
