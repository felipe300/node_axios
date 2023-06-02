import axios from "axios";
import { readFileSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const readUrlsfile = async () => {
  let readJsonFile = readFileSync(`${__dirname}/src/data/urls.json`);
  let JSONUrls = JSON.parse(readJsonFile);

  for (let url of JSONUrls.data) {
    const response = await axios.get(url.url);
    const data = response.data;
    return data;
  }
};

console.log(readUrlsfile);
