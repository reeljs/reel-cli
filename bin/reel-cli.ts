#!/usr/bin/env node

import { argv } from "process";
const figlet = require('figlet');
import chalk = require('chalk');
import { program } from 'commander';
import getVersion from "../helpers/getVersion"
import createPackageJson from "../helpers/createPackageJson"
const ora = require('ora');
import getCommand, { CliCommand } from '../helpers/command';

const spinner = ora();
figlet('REEL JS!!', function (err: any, data: any) {
    if (err) {
        console.log(chalk.yellowBright('Something went wrong...'));
        console.dir(err);
        return;
    }
    console.log(data)
});


const defaultCommand = 'create'


const args = argv
const command = args.slice(2);
const commands: { [command: string]: CliCommand } = {
    create: () => getCommand({
        type: 'create',
    }),
}

const getArgs = {
    '--version': Boolean,
    '-v': '--version',
    '--help': Boolean,
    '-h': '--help',
    '--verbose': Boolean,
}

if (!process.argv.slice(2).length) {
    program.outputHelp();
}

if (command.length >= 2 && command[0] === '--version' || command.length >= 2 && command[0] === '-v' || command.length >= 2 && command[0] === 'create') {
    spinner.start();
    setTimeout(() => {
        console.log(chalk.redBright('Too many arguments'));
        setTimeout(() => {
            spinner.stop();
            console.log(chalk.redBright('Exiting...'));
        }, 1000);
    }, 100);
}
else {
    commands[command[0]]()
}



setTimeout(() => {
    program.command('create').description('Create a new project').action(() => {
        getCommand({
            type: 'create',
        })
    });
}, 400);

// process.exit(0);