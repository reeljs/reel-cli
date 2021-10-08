#!/usr/bin/env node
import startServer from '../reel-cli-server/server';
import chalk = require('chalk');
import { program } from 'commander';
import getVersion from "../helpers/getVersion"
import * as inquirer from 'inquirer'; 
import createPackageJson from "../helpers/createPackageJson"
import * as ora from 'ora';
const spinner = ora();
const reelStart = (argv: any) => {
    setTimeout(() => {
        program.version(getVersion());
        program.command('start').description('Start the application').action(() => {
            inquirer.prompt([
                {
                    name: "projectName",
                    message: "What is the name of your project?",
                    type: "input",
                    default: "new-reel-project"
                },
                {
                    name: "projectDescription",
                    message: "What is the description of your project?",
                    type: "input",
                    default: "A new project created with REEL"
                },
                {
                    name: "projectLicense",
                    message: "What is the license of your project?",
                    type: "input",
                    default: "MIT"
                }
            ]).then((answers: any) => {
                spinner.start('Creating package.json');
                createPackageJson({
                    dir: answers.projectName,
                    name: answers.projectName,
                    description: answers.projectDescription,
                    version: "1.0.0",
                    license: answers.projectLicense,
                });
                spinner.succeed('Created package.json');
                spinner.start('Installing dependencies');
            })
        })
    })

}