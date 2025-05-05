import { createWriteStream, createReadStream } from "node:fs";
import { createBrotliCompress } from "node:zlib";
import { pipeline } from "node:stream/promises";
import { printLogs, resolvePath } from "../../utils/index.js";
import { LOGS_TYPE } from "../../constants/index.js";

export const compress = async ([inputPath, outputPath]) => {
  if (!inputPath || !outputPath) {
    printLogs(LOGS_TYPE.invalidInput);
    return;
  }

  const input = resolvePath(inputPath);
  const output = resolvePath(outputPath);

  try {
    const readStream = createReadStream(input);
    const writeStream = createWriteStream(output);
    const zipStream = createBrotliCompress();

    await pipeline(readStream, zipStream, writeStream);
  } catch (error) {
    printLogs(LOGS_TYPE.operationFailed);
  }
};
