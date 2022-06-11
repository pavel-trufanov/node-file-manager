import os from 'os';
import readline from 'readline';
import {resolveAndExecute} from "../commands/command-resolver.js";
import {printCurrentPath, setCurrentPath} from "../state/state.js";

export const start = () => {
    const username = resolveUserName();
    console.log(`Welcome to the File Manager, ${username}!`);

    setCurrentPath(os.homedir());

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.prompt();
    rl.on('close', () => {close(username)});
    rl.on('line',  (input) => {onReadLine(rl, input)});
};

const resolveUserName = () => {
    const propPrefix = '--username';
    let username;
    if (process.argv.length > 2) {
        username = process.argv[2].slice(propPrefix.length + 1);
    }
    if (!username) {
        username = "Anonymous";
    }
    return username;
}

const close = (username) => {
    console.log(`Thank you for using File Manager, ${username}!`);
    process.exit();
}

const onReadLine = async (rl, input) => {
    if (input === '.exit') {
        rl.emit('close');
    } else {
        try {
            await resolveAndExecute(input.toString());
        } catch (err) {
            console.log(err.message);
        }
        printCurrentPath();
        rl.prompt();
    }
}

start();
