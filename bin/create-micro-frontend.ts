import inquirer from "inquirer";
import {
  ProjectTemplate,
  defaultPrompt,
  IPrompt,
} from "../src/constants/prompt";
import main from "../src/main";

(async function () {
  try {
    const answers = await inquirer.prompt([
      {
        name: "name",
        message: `Project name (${defaultPrompt.name}):`,
        type: "input",
        default: defaultPrompt.name,
      },
      {
        name: "template",
        message: "Choose your template",
        type: "list",
        choices: Object.keys(ProjectTemplate),
      },
    ]);

    main(answers as IPrompt);
  } catch (e) {
    console.log(e);
  }
})();
