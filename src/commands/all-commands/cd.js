import path from "node:path";
import fs from "node:fs/promises";
import { printLogs, getCurrentPath } from "../../utils/index.js";
import { LOGS_TYPE } from "../../constants/index.js";

export const cd = async ([inputPath]) => {
  if (!inputPath) {
    printLogs(LOGS_TYPE.invalidInput);
    return;
  }

  const redirectPath = path.isAbsolute(inputPath)
    ? path.normalize(inputPath)
    : path.resolve(getCurrentPath(), inputPath);

  try {
    const status = await fs.stat(redirectPath);
    if (status.isDirectory()) {
      process.chdir(redirectPath);
    }
  } catch (error) {
    printLogs(LOGS_TYPE.operationFailed);
  }
};
