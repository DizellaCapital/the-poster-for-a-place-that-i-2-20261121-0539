#!/bin/sh
# Re-render the poster from poster.html (build-time only, not run by main.ts).
# Uses the Playwright-cached headless Chromium on this VM.
CHROME="$HOME/.cache/ms-playwright/chromium-1255/chrome-linux64/chrome"
"$CHROME" --headless=new --disable-gpu --no-sandbox --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=1024,1024 \
  --screenshot=entry.png "file://$PWD/poster.html"
