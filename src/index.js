import readline from 'readline';
import { printLogs } from './utils/index.js';
import { LOGS_TYPE } from './constants/index.js';
import { navigationCommands } from './commands/index.js';

printLogs(LOGS_TYPE.welcome);
printLogs(LOGS_TYPE.workingDirectory);

const exitProgram = () => {
    printLogs(LOGS_TYPE.goodbye);
    process.exit(0);
  }  

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> ',
  });

  rl.on('line', async (line) => {
    const input = line.trim();
    if (input === '.exit') {
      exitProgram();
      return;
    }

    await navigationCommands(input);

    await printLogs(LOGS_TYPE.workingDirectory);
    rl.prompt();
  });

  rl.on('SIGINT', exitProgram);
