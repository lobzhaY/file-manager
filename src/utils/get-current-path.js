import { cwd } from 'node:process';

export const getCurrentPath = () => {
    return cwd();
}