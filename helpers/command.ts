import { Interface } from "readline";

interface ICommand {
    type: string;
}

function getCommand(command: ICommand) {
    console.log("yeahh");
    return command.type;
}

export type CliCommand = (argv? : string[]) => any;

export default getCommand;