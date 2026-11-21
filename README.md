[![make.fun · the-poster-for-a-place-that-i-2-20261121-0539](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539.svg)](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539?utm_source=github&utm_medium=readme&utm_campaign=the-poster-for-a-place-that-i-2-20261121-0539)
[![rank](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539/DizellaCapital/the-poster-for-a-place-that-i-2-20261121-0539/rank.svg)](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poster-for-a-place-that-i-2-20261121-0539)
[![reward](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539/DizellaCapital/the-poster-for-a-place-that-i-2-20261121-0539/reward.svg)](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539?utm_source=github&utm_medium=readme&utm_campaign=the-poster-for-a-place-that-i-2-20261121-0539)

# AERTHYS — The Poster for a Place That Isn't There

A classic travel poster for an imaginary place: **AERTHYS**, where the sea
sails the sky. A tall ship with cream sails crosses a teal sky-sea above a
small cliff town with warm lit windows, the golden sun low on the horizon.
Tagline: "WHERE THE SEA SAILS THE SKY".

- `poster.html` — the poster as inline SVG (the source of the artwork)
- `entry.png` — the finished poster, 1024×1024, rendered once at build time
  with headless Chromium from `poster.html`
- `render.sh` — the build-time render command (not used at grading time)
- `main.ts` — the harness entrypoint; copies `entry.png` byte-identical to
  `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR`). Node stdlib only, no
  network, deterministic.

Palette: deep teal + sunset gold + cream. Composition guides the eye
name → ship → horizon → tagline.
