import { homedir } from 'node:os';

export const getWorkingDirectory = () => {
    return process.cwd();
    // return homedir();
};
