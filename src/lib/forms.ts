import { promises as fs } from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "data");

export async function appendJsonRecord(
  filename: string,
  record: Record<string, unknown>
) {
  const filePath = path.join(dataDir, filename);
  let existing: unknown[] = [];
  try {
    const raw = await fs.readFile(filePath, "utf8");
    existing = JSON.parse(raw);
    if (!Array.isArray(existing)) existing = [];
  } catch {
    existing = [];
  }
  existing.push({
    ...record,
    submittedAt: new Date().toISOString(),
  });
  await fs.mkdir(dataDir, { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf8");
}
