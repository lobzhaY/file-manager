import fs from "node:fs/promises";
import crypto from "node:crypto";
import { createReadStream } from 'node:fs';
import { printLogs, resolvePath } from "../../utils/index.js";
import { LOGS_TYPE } from "../../constants/index.js";

export const hash = async ([filePath]) => {
    if (!filePath) {
        printLogs(LOGS_TYPE.invalidInput);
        return;
    }

    const source = resolvePath(filePath);

    try {
        const stat = await fs.stat(source);
            if (!stat.isFile()) {
              printLogs(LOGS_TYPE.invalidInput);
              return;
            }

            const hash = crypto.createHash('sha256');
            const readStream = createReadStream(filePath);

            readStream.on('data', (chunk) => {
                hash.update(chunk);
              });
        
            readStream.on('end', () => {
                const result = hash.digest('hex');
                console.log(result);
              });

    } catch (error) {
        printLogs(LOGS_TYPE.operationFailed);
    }
}