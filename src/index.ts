import { downloadInput } from "./inputDownloader.js";

const year = "2022";
const day = process.argv[2].toString();

const input = await downloadInput({ year, day });

const solution = await import(`./days/${day}/index.ts`);
console.log(solution.default(input));
