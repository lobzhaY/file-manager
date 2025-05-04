import { LOGS_TYPE, LOGS_TITLE } from '../constants/index.js';
import { getUsername } from './get-username.js';
import { getWorkingDirectory } from './get-working-directory.js';

export const printLogs = (logsType, payload) => {
    const userName = getUsername();
    const workingDirectory = getWorkingDirectory();

    switch (logsType) {
        case LOGS_TYPE.welcome: 
            console.log(personalMessage(LOGS_TITLE.welcome, userName));
            break;
        case LOGS_TYPE.goodbye: 
            console.log(personalMessage(LOGS_TITLE.goodbye, userName));
            break;
        case LOGS_TYPE.workingDirectory:
            console.log(`${LOGS_TITLE.workingDirectory} ${workingDirectory}`);
            break;
        case LOGS_TYPE.invalidInput:
            console.log(LOGS_TITLE.invalidInput);
            break;
        case LOGS_TYPE.operationFailed:
            console.log(LOGS_TITLE.operationFailed);
            break;
        case LOGS_TYPE.fileTable: 
            console.table(payload);
        default:
            break;
    }
};

const personalMessage = (text, username) => {
    return text.replace(/Username/g, username);
};
