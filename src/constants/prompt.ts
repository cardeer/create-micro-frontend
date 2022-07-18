export enum ProjectTemplate {
  React = "React",
}

export interface IPrompt {
  name: string;
  template: ProjectTemplate;
}

export const defaultPrompt: IPrompt = {
  name: "micro-frontend",
  template: ProjectTemplate.React,
};
