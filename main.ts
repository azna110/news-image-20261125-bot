// A news-image-daily entry (Node 22, standard library only): the image beside this
// file sums up the world's news of Wednesday 25 November 2026, and this program
// copies it to /output/entry.png. Deterministic: no clock, no randomness, no network.
// The copied bytes are the judged image, byte for byte, on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
