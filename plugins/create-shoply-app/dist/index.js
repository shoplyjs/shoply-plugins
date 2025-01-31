#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const simple_git_1 = __importDefault(require("simple-git"));
const path_1 = __importDefault(require("path"));
const readline_1 = __importDefault(require("readline"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const git = (0, simple_git_1.default)();
const repoUrl = 'https://github.com/shoplyjs/shoply.git';
const currentDir = process.cwd();
async function cloneStarter({ starterName }) {
    if (!repoUrl) {
        throw new Error('Please provide a valid repository URL.');
    }
    try {
        // clone the starter repo
        await git.clone(repoUrl, starterName, ['-b', 'develop']);
        console.log(`Cloning repository from ${repoUrl}...`);
        // navigate to the starter directory
        const repoPath = path_1.default.resolve(currentDir);
        const starterDir = path_1.default.join(repoPath, starterName);
        await git.cwd(starterDir);
        console.log(`Navigate to ${starterDir}`);
        // change the remote origin from origin to starter
        await git.removeRemote('origin');
        console.log('Removed origin remote');
        await git.addRemote('shoply', repoUrl);
        console.log('Added shoply remote');
        // await git.push('shoply', 'starter');
        // console.log('Pushed to starter branch');
    }
    catch (error) {
        console.error('Error:', error);
    }
}
async function promptForName() {
    const rl = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise(resolve => {
        rl.question('Please specify a name for your project: ', name => {
            rl.close();
            resolve(name.trim());
        });
    });
}
const program = new commander_1.Command();
program
    .name('create-shopify-app')
    .description('CLI to create a Shopify app with specific folder filtering')
    .version('1.0.0')
    .argument('[name]', 'Name of the project to create')
    // .option('-d, --dir <directory>', 'Target directory for cloning', process.cwd())
    .action(async (name) => {
    if (!name) {
        name = await promptForName();
        if (!name) {
            console.error('Project name is required.');
            process.exit(1);
        }
    }
    await cloneStarter({ starterName: name });
});
program.parse(process.argv);
//# sourceMappingURL=index.js.map