import { CliInput } from '../types';

export const knownCommands = ['archive', 'build', 'develop', 'init', 'show-config'];

export const knownArgs: { [key: string]: string } = {
  '-h': 'help',
  '--help': 'help',
  '-v': 'version',
  '--version': 'version',
  '-c': 'configFile',
  '--config': 'configFile',
  '-y': 'skipQuestions',
  '--yes': 'skipQuestions'
};

export function parseArgs(argv: string[]): CliInput {
  const args: { [key: string]: string | boolean } = {};

  let command: string | undefined;
  let lastArg: string = '';

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];

    if (i === 0 && knownCommands.includes(arg)) {
      command = arg;
      continue;
    }

    if (knownArgs[arg]) {
      args[knownArgs[arg]] = true;
    } else if (lastArg && knownArgs[lastArg]) {
      args[knownArgs[lastArg]] = arg;
    }

    lastArg = arg;
  }

  return { args, command } as CliInput;
}
