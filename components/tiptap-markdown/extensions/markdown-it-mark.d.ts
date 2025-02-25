// import type MarkdownIt from "markdown-it";

// declare module "markdown-it-mark" {
//   const markdownItMark: (md: MarkdownIt) => void;
//   export default markdownItMark;
// }

// declare module "markdown-it-mark" {
//     import type { PluginSimple } from "markdown-it";
  
//     const markdownItMark: PluginSimple;
//     export default markdownItMark;
//   }
declare module "markdown-it-mark" {
    const markdownItMark: (md: MarkdownIt) => void;
    export default markdownItMark;
  }
  