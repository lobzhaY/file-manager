import os from 'node:os';
import { LOGS_TYPE } from '../../../../constants/index.js'
import { printLogs } from '../../../../utils/index.js';

export const username = () => {
    const nameVal = os.userInfo().username;
    printLogs(LOGS_TYPE.text, nameVal);
};