import path from "node:path";
import fs from "node:fs/promises";
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { printLogs, resolvePath } from "../../utils/index.js";
import { LOGS_TYPE } from "../../constants/index.js";

export const cp = async ([moveFrom, moveTo]) => {
  if (!moveFrom || !moveTo) {
    printLogs(LOGS_TYPE.invalidInput);
    return;
  }

  const source = resolvePath(moveFrom);
  const destinationDir = resolvePath(moveTo);
  const fileName = path.basename(source);
  const destination = path.join(destinationDir, fileName);

  try {
    const stat = await fs.stat(source);
    const destStat = await fs.stat(destinationDir);

    if (!destStat.isDirectory() || !stat.isFile()) {
      printLogs(LOGS_TYPE.invalidInput);
      return;
    }

    await pipeline(createReadStream(source), createWriteStream(destination));
  } catch (error) {
    printLogs(LOGS_TYPE.operationFailed);
  }
};
