import { mkdirSync, writeFileSync } from "node:fs";

const line = "fix: Friday deploy, only tested on my laptop — production is on its own now";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
