import axios from "axios";
import * as dotenv from "dotenv";
import fs from "fs";
dotenv.config();

export const downloadInput = async ({
  year,
  day,
}: {
  year: string;
  day: string;
}) => {
  const filePath = `src/inputs/${day}`;
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, "utf-8");
  }

  const url = `https://adventofcode.com/${year}/day/${day}/input`;
  const response = await axios.get(url, {
    headers: {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "en-US,en;q=0.9",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
      cookie: `session=${process.env.SESSION}`,
    },
  });

  const data = response.data as string;

  fs.writeFileSync(filePath, data, { flag: "w" });

  return data;
};
