import { LOGS_TYPE, LOGS_TITLE } from '../constants/index.js';
import { getUsername } from './get-username.js';
import { getCurrentPath } from './get-current-path.js';

export const printLogs = async (logsType, payload) => {
    const userName = getUsername();
    const workingDirectory = getCurrentPath();

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
            break;
        case LOGS_TYPE.text: 
            console.log(payload);
            break;
        default:
            break;
    }
};

const personalMessage = (text, username) => {
    return text.replace(/Username/g, username);
};
