import * as fs from "fs";
import * as path from "path";

export class JsonStorage<T> {
  private dataDir: string;

  constructor(dataDir: string) {
    this.dataDir = dataDir;
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
    }
  }

  async save(id: string, data: T): Promise<void> {
    const filePath = path.join(this.dataDir, `${id}.json`);
    await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2));
  }

  async get(id: string): Promise<T | null> {
    const filePath = path.join(this.dataDir, `${id}.json`);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    const content = await fs.promises.readFile(filePath, { encoding: "utf-8" });
    return JSON.parse(content) as T;
  }

  async delete(id: string): Promise<void> {
    const filePath = path.join(this.dataDir, `${id}.json`);
    if (fs.existsSync(filePath)) {
      await fs.promises.unlink(filePath);
    }
  }

  async list(): Promise<string[]> {
    const files = await fs.promises.readdir(this.dataDir);
    return files
      .filter((file) => file.endsWith(".json"))
      .map((file) => file.replace(".json", ""));
  }
}
