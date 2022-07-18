import shell from "shelljs";
import { IPrompt } from "./constants/prompt";
import { ncp } from "ncp";
import * as path from "path";

function errorHandler(err: any) {
  console.log(err ? err : "");
}

export default function main(prompt: IPrompt, dir: string) {
  shell.mkdir(prompt.name);

  const template = prompt.template.toLowerCase();

  ncp(path.join(dir, "src/templates/common"), prompt.name, errorHandler);
  ncp(path.join(dir, `src/templates/${template}`), prompt.name, errorHandler);
}
