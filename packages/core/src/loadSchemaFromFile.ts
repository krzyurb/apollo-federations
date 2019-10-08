import { gql } from "apollo-server";
import { readFileSync } from "fs";
import { resolve } from "path";

export default (...filePath: string[]) => gql(
  readFileSync(resolve(...filePath), { encoding: "utf8" }),
);
