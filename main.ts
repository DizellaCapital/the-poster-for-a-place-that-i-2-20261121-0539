// AERTHYS — "The Poster for a Place That Isn't There"
// (the-poster-for-a-place-that-i-2-20261121-0539)
//
// The poster was drawn at build time as inline SVG in poster.html and
// rendered once with headless Chromium into entry.png (1024x1024).
// This entrypoint only copies that finished, deterministic image to the
// harness output directory. Node 22+ standard library only; no network,
// no clock, no randomness — every run writes byte-identical output.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
