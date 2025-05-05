import fs from "node:fs/promises";
import path from "node:path";
import { printLogs, getCurrentPath } from "../../utils/index.js";
import { LOGS_TYPE } from "../../constants/index.js";

export const rm = async ([filePath]) => {
  if (!filePath) {
    printLogs(LOGS_TYPE.invalidInput);
    return;
  }

  try {
    const resolvedPath = path.isAbsolute(filePath)
      ? path.normalize(filePath)
      : path.resolve(getCurrentPath(), filePath);

    const stat = await fs.stat(resolvedPath);
    if (!stat.isFile()) {
      printLogs(LOGS_TYPE.operationFailed);
      return;
    }
    
    await fs.access(resolvedPath);
    await fs.unlink(resolvedPath);
  } catch (error) {
    printLogs(LOGS_TYPE.operationFailed);
  }
};
