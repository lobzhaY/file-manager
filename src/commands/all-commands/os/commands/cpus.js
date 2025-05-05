import os from 'node:os';
import { LOGS_TYPE } from '../../../../constants/index.js'
import { printLogs } from '../../../../utils/index.js';

export const cpus = () => {
    const cpusVal = os.cpus();
    printLogs(LOGS_TYPE.text, `overall amount of CPUS ${cpusVal.length}`);

    const tableCpus = cpusVal.map(({ model, speed }, index) => ({
        Index: index + 1,
        Model: model,
        'Clock (GHz)': (speed / 1000).toFixed(2)
    }));

    printLogs(LOGS_TYPE.fileTable, tableCpus);
};
