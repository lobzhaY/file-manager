import fs from "node:fs/promises";
import { printLogs, resolvePath } from "../../utils/index.js";
import { LOGS_TYPE } from "../../constants/index.js";

export const cat = async ([filePath]) => {
    if (!filePath) {
        printLogs(LOGS_TYPE.invalidInput);
        return;
      }

      const source = resolvePath(filePath);

      try {
        const content = await fs.readFile(source, 'utf-8');
        printLogs(LOGS_TYPE.text, content);
    } catch (error) {
        printLogs(LOGS_TYPE.operationFailed);
    }
};
