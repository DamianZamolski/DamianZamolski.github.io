import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export function getDirectories(url: string) {
  return fs
    .readdirSync(path.dirname(fileURLToPath(url)), {
      withFileTypes: true,
    })
    .filter((entry) => entry.isDirectory())
    .map((directory) => directory.name);
}
