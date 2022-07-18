import shell from "shelljs";
import { IPrompt } from "./constants/prompt";
import { ncp } from "ncp";

function errorHandler(err: any) {
  console.log(err);
}

export default function main(prompt: IPrompt) {
  shell.mkdir(prompt.name);

  const template = prompt.template.toLowerCase();

  ncp("src/templates/common", prompt.name, errorHandler);
  ncp(`src/templates/${template}`, prompt.name, errorHandler);
}
