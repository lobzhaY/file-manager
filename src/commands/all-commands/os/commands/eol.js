import os from 'node:os';
import { LOGS_TYPE } from '../../../../constants/index.js'
import { printLogs } from '../../../../utils/index.js';

export const eol = () => {
    const eolVal = os.EOL;
    printLogs(LOGS_TYPE.text, JSON.stringify(eolVal));
};