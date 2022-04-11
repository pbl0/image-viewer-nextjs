#!/bin/bash
cd public/assets;
data='../data.json'
echo "[" > "$data";
for f in *; do
  res=$(identify -format "%wx%h" "$f");
  date=$(identify -format "%[EXIF:DateTime]" "$f")
  echo -e "   " {'"name":' "\x22$f\x22", '"res":' "\x22$res\x22", '"date":' "\x22$date\x22"}, >> "$data"
done
echo "]" >> "$data";
sed -i '1h;1!H;$!d;g;s/\(.*\),/\1/' "$data";

