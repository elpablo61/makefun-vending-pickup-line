// One Line, One Minute: The Vending Machine Pickup Line Contest
// u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee
// Writes a single vending-machine pickup line (<= 200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Press B7. That's my code for the cute one staring at the chips. Come closer.";

// The gate refuses anything over 200 characters, so fail loudly instead of
// submitting a line the judge would never see.
if (LINE.length > 200) {
  throw new Error(`pickup line is ${LINE.length} chars, over the 200-char gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
