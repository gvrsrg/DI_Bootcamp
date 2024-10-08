import { promises as fs } from "fs";

export const read_file = async (path) => {
  try {
    return await fs.readFile(path, "utf-8");
  } catch (err) {
    throw new Error(err.message);
  }
};
