import path from 'path';
import { printLogs, getWorkingDirectory } from '../../utils/index.js';
import { LOGS_TYPE } from '../../constants/index.js';

export const up = () => {
    const current = getWorkingDirectory();
    const root = path.parse(current).root;
    const parent = path.dirname(current);

    if (current === root) {
        return;
    }

    try {
        process.chdir(parent);       
       // setCurrentDir(process.cwd()); 
    } catch {
        printLogs(LOGS_TYPE.operationFailed);
    }
}