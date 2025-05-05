import os from 'node:os';
import { LOGS_TYPE } from '../../../../constants/index.js'
import { printLogs } from '../../../../utils/index.js';

export const architecture = () => {
    const archVal = os.arch();
    printLogs(LOGS_TYPE.text, archVal);
};