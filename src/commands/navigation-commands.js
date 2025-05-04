import { printLogs } from '../utils/index.js';
import { LOGS_TYPE, COMMANDS_NAME } from '../constants/index.js';
import { up, cd, ls } from './all-commands/index.js';

export const navigationCommands = async (input) => {
    const [commandName, ...args] = input.trim().split(' ');

    try {
        switch (commandName) {
          case COMMANDS_NAME.up: 
            up();
            break;
          case COMMANDS_NAME.cd:
            cd(args);
            break;
          case COMMANDS_NAME.ls:
            ls();
            break;
          default:
            printLogs(LOGS_TYPE.invalidInput);
        }
      } catch {
        printLogs(LOGS_TYPE.operationFailed);
      }
};