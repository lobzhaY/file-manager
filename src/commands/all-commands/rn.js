import path from "node:path";
import fs from "node:fs/promises";
import { printLogs, resolvePath } from "../../utils/index.js";
import { LOGS_TYPE } from "../../constants/index.js";

export const rn = async ([filePath, newFileName]) => {
  if (!filePath || !newFileName) {
    printLogs(LOGS_TYPE.invalidInput);
    return;
  }

  const oldFilePath = resolvePath(filePath);
  const dir = path.dirname(oldFilePath);
  const newFilePath = path.join(dir, newFileName);

  try {
    const stat = await fs.stat(oldFilePath);
    if (!stat.isFile()) {
      printLogs(LOGS_TYPE.invalidInput);
      return;
    }

    await fs.rename(oldFilePath, newFilePath);
  } catch (error) {
    printLogs(LOGS_TYPE.operationFailed);
  }
};
