/// <reference types="vite/client" />
declare module "*.md" {
  const content: string;
  export default content;
}

declare module "github-markdown-css";
