import { printLogs } from '../utils/index.js';
import { LOGS_TYPE, COMMANDS_NAME } from '../constants/index.js';
import { up, cd, ls, cat, add, mkdir, rn, cp, mv, rm } from './all-commands/index.js';

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
          case COMMANDS_NAME.cat:
            cat(args);
            break;
          case COMMANDS_NAME.add:
            add(args);
            break;
          case COMMANDS_NAME.mkdir:
            mkdir(args);
            break;
          case COMMANDS_NAME.rn:
            rn(args);
            break;
          case COMMANDS_NAME.cp:
            cp(args)
            break;
          case COMMANDS_NAME.mv:
            mv(args);
            break;
          case COMMANDS_NAME.rm:
            rm(args);
            break;
          default:
            printLogs(LOGS_TYPE.invalidInput);
        }
      } catch {
        printLogs(LOGS_TYPE.operationFailed);
      }
};