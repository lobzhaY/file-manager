import fs from "node:fs/promises";
import { getCurrentPath, printLogs } from '../../utils/index.js';
import { LOGS_TYPE, FILE_TYPES } from "../../constants/index.js";

export const ls = async () => {
    const currentPath = getCurrentPath();

    try {
        const allItems = await fs.readdir(currentPath, { withFileTypes: true });

        const itemsList = allItems.map((item) => ({ name: item.name, type: item.isDirectory() ? FILE_TYPES.directory : FILE_TYPES.file }));

        const sortedItems = {
            directory: itemsList.filter((item) => item.type === FILE_TYPES.directory).sort((a, b) => a.name.localeCompare(b.name)), 
            file: itemsList.filter((item) => item.type === FILE_TYPES.file).sort((a, b) => a.name.localeCompare(b.name)), 
        };

        printLogs(LOGS_TYPE.fileTable, [...sortedItems.directory, ...sortedItems.file]);
    } catch (error) {
         printLogs(LOGS_TYPE.operationFailed);
    }
}