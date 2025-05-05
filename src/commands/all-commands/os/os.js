import { eol, cpus, homedir, username, architecture } from './commands/index.js';
import { printLogs } from "../../../utils/index.js";
import { LOGS_TYPE, FLAGS_NAME } from "../../../constants/index.js";

export const os = ([flag]) => {
  if (!flag) {
    printLogs(LOGS_TYPE.invalidInput);
    return;
  }

  try {
    switch (flag) {
      case FLAGS_NAME.eol:
        eol();
        break;
      case FLAGS_NAME.cpus:
        cpus();
        break;
      case FLAGS_NAME.homedir:
        homedir();
        break;
      case FLAGS_NAME.username:
        username();
        break;
      case FLAGS_NAME.architecture:
        architecture();
        break;
      default:
        printLogs(LOGS_TYPE.invalidInput);
    }
  } catch (error) {
    printLogs(LOGS_TYPE.operationFailed);
  }
};
