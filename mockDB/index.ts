import fs from "fs/promises";
import path from "path";

import { User } from "../client/src/types/User";

export const readDB = async (): Promise<User[]> => {
  const data = await fs.readFile(path.join(__dirname, "/db.json"), "utf8");
  const parsedData = JSON.parse(data);
  return parsedData.users;
};

export const writeDB = async (data: User[]) => {
  const jsonData = JSON.stringify(data);
  await fs.writeFile(path.join(__dirname, "/db.json"), jsonData);
};