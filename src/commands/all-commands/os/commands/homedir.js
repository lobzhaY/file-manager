import os from 'node:os';
import { LOGS_TYPE } from '../../../../constants/index.js'
import { printLogs } from '../../../../utils/index.js';

export const homedir = () => {
    const dirVal = os.homedir();
    printLogs(LOGS_TYPE.text, dirVal);
};
