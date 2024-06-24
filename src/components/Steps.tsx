import { Code } from "./Code";

export function Steps() {
const importyaml = `project:
  name: recipe-solidjs
  tags:
    - zerops-recipe

services:
  - hostname: app
    type: static
    enableSubdomainAccess: true
    buildFromGit: https://github.com/zeropsio/recipe-solidjs-static`.trim();

const zeropsyaml = `zerops:
  - setup: app
    build:
      base: nodejs@20
      buildCommands:
        - pnpm i
        - pnpm build
      deployFiles:
        - dist/~
    run:
      base: static`.trim();
  return (
    <div>
      <div class="flex justify-center">
        <p class="text-center mx-auto">Deploying will import the following structure (zerops-project-import.yml)<br/>
        and use following (zerops.yml) instructions to build and deploy your app:</p>
      </div>
      <div class="grid grid-cols md:grid-cols-2 font-light gap-5 md:gap-10 pt-4">
        <div class="flex flex-col gap-5">
          <Code fileLink="https://github.com/zeropsio/recipe-solid-static/blob/main/zerops-project-import.yml" file="zerops-project-import.yml" code={importyaml} />
          <div
          class="flex flex-col py-10 h-[260px] rounded-md gap-5 px-10 bg-[#F7F7F7]"
        >
          <a
            href="https://github.com/zeropsio/recipe-solid-static"
            target="_blank"
            class="primarybutton rounded-full text-center text-md hover:duration-300 hover:no-underline"
            >Recipe Source Code</a>
          <a
            href="https://discord.com/invite/WDvCZ54"
            target="_blank"
            class="discordbutton rounded-full text-center text-md hover:duration-300 hover:no-underline"
            >Discord</a>
          <a
            href="https://docs.zerops.io"
            target="_blank"
            class="zeropsbutton rounded-full text-center text-md hover:duration-300 hover:no-underline"
            >Documentation</a>
        </div>
        </div>
        <div class="flex flex-col">
          <Code fileLink="https://github.com/zeropsio/recipe-solid-static/blob/main/zerops.yml" file="zerops.yml" code={zeropsyaml} />
        </div>
      </div>
    </div>
  );
}
