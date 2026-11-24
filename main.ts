import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My calendar says 'Focus Time' from 2 to 3. Fourteen people have booked me over it, which is the most focused anyone has been on me all year.";

if (joke.length < 1 || joke.length > 200) {
  throw new Error(`joke must be 1 to 200 characters, got ${joke.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
