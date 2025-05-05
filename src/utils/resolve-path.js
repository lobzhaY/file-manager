import path from "node:path";
import { getCurrentPath } from "./get-current-path.js";

export const resolvePath = (filePath) => {
  return path.isAbsolute(filePath)
    ? path.normalize(filePath)
    : path.resolve(getCurrentPath(), filePath);
};
