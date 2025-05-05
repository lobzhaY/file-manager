import { printLogs } from "../utils/index.js";
import { LOGS_TYPE, COMMANDS_NAME } from "../constants/index.js";
import {
  up,
  cd,
  ls,
  cat,
  add,
  mkdir,
  rn,
  cp,
  mv,
  rm,
  hash,
  compress,
  decompress,
  os,
} from "./all-commands/index.js";

export const navigationCommands = async (input) => {
  const [commandName, ...args] = input.trim().split(" ");

  try {
    switch (commandName) {
      case COMMANDS_NAME.up:
        up();
        break;
      case COMMANDS_NAME.cd:
        await cd(args);
        break;
      case COMMANDS_NAME.ls:
        await ls();
        break;
      case COMMANDS_NAME.cat:
        await cat(args);
        break;
      case COMMANDS_NAME.add:
        await add(args);
        break;
      case COMMANDS_NAME.mkdir:
        await mkdir(args);
        break;
      case COMMANDS_NAME.rn:
        await rn(args);
        break;
      case COMMANDS_NAME.cp:
        await cp(args);
        break;
      case COMMANDS_NAME.mv:
        await mv(args);
        break;
      case COMMANDS_NAME.rm:
        await rm(args);
        break;
      case COMMANDS_NAME.hash:
        await hash(args);
        break;
      case COMMANDS_NAME.compress:
        await compress(args);
        break;
      case COMMANDS_NAME.decompress:
        await decompress(args);
        break;
      case COMMANDS_NAME.os:
        os(args);
        break;
      default:
        printLogs(LOGS_TYPE.invalidInput);
    }
  } catch {
    printLogs(LOGS_TYPE.operationFailed);
  }
};
