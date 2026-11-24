import { mkdirSync, writeFileSync } from "node:fs";

// One-line warning label for a time machine (<= 120 characters).
// Final: tightest cut — "to drive" dropped as redundant, the closing
// "insist on driving" carries the wheel. Hazard: duplicate self.
// Punch lands in the last words, deadpan safety-notice voice throughout.
const ENTRY =
  "WARNING: Do not meet yourself. Neither of you is insured, and both of you will insist on driving.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
