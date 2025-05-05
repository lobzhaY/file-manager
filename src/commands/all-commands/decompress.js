import { createWriteStream, createReadStream } from "node:fs";
import { createBrotliDecompress } from "node:zlib";
import { pipeline } from "node:stream/promises";
import { printLogs, resolvePath } from "../../utils/index.js";
import { LOGS_TYPE } from "../../constants/index.js";

export const decompress = async ([inputPath, outputPath]) => {
  if (!inputPath || !outputPath) {
    printLogs(LOGS_TYPE.invalidInput);
    return;
  }

  const input = resolvePath(inputPath);
  const output = resolvePath(outputPath);

  try {
    const readStream = createReadStream(input);
    const zipStream = createBrotliDecompress();
    const writeStream = createWriteStream(output);

    await pipeline(readStream, zipStream, writeStream);
  } catch (error) {
    printLogs(LOGS_TYPE.operationFailed);
  }
};
