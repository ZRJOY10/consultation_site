# Course video

`IeltsVideoSection` loads these at runtime. They live here rather than in
`src/assets` so Vite copies them verbatim instead of pulling a large binary
through the bundler.

| File              | Size  | Notes                                            |
| ----------------- | ----- | ------------------------------------------------ |
| `ielts-promo.mp4` | 6.8MB | 1280x720, 30fps, H.264 high + AAC, faststart.    |
| `ielts-promo.jpg` | 40KB  | Poster, frame 1190 — the settled graphics card.  |

## Regenerating

Source master: `src/assets/video/with text.mp4` — 1920x1080, 60fps, 13.4 Mbps,
104 MB, 61.4s. It is gitignored: too large for GitHub and the site never uses it.

    ffmpeg -i "src/assets/video/with text.mp4" \
      -vf "scale=-2:720,fps=30" \
      -c:v libx264 -crf 25 -preset slow -profile:v high -pix_fmt yuv420p \
      -c:a aac -b:a 96k -ac 2 \
      -movflags +faststart \
      public/videos/ielts-promo.mp4

CRF 25 rather than a higher number because the clip carries burned-in Bangla
subtitles, and they go mushy before the footage does. Dropping 60fps to 30 is
where most of the saving comes from; the source is a talking head, so nothing
needs the extra frames. `+faststart` moves the metadata to the front of the
file, which is what lets the player read dimensions and begin playback before
the whole download lands — the section sizes its frame from those dimensions.

Poster, picked frame-accurately because seeking by timestamp lands mid-sentence:

    ffmpeg -i public/videos/ielts-promo.mp4 -vf "select='eq(n,1190)'" \
      -frames:v 1 -q:v 3 public/videos/ielts-promo.jpg
