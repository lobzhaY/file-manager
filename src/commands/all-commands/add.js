import path from "node:path";
import fs from "node:fs/promises";
import { printLogs, getCurrentPath } from "../../utils/index.js";
import { LOGS_TYPE } from "../../constants/index.js";

export const add = async ([fileNewName]) => {
  if (!fileNewName) {
    printLogs(LOGS_TYPE.invalidInput);
    return;
  }

  const newPath = path.resolve(getCurrentPath(), fileNewName);

  try {
    await fs.appendFile(newPath, "");
  } catch (error) {
    printLogs(LOGS_TYPE.operationFailed);
  }
};
