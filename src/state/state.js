import os from "os";

export const state = {}

export const setCurrentPath = (currentPath) => {
    state.currentPath = currentPath;
}

export const getCurrentPath = () => {
    return state.currentPath;
}

export const printCurrentPath = () => {
    console.log(`${os.EOL}You are currently in ${state.currentPath}`);
}
