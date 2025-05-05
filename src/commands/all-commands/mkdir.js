import path from "node:path";
import fs from "node:fs/promises";
import { printLogs, getCurrentPath } from "../../utils/index.js";
import { LOGS_TYPE } from "../../constants/index.js";

export const mkdir = async ([dirName]) => {
    if (!dirName) {
        printLogs(LOGS_TYPE.invalidInput);
        return;
    }

    const newPath = path.resolve(getCurrentPath(), dirName);

    try {
        await fs.mkdir(newPath, { recursive: false }); 
    } catch (error) {
        printLogs(LOGS_TYPE.operationFailed);
    }
};
