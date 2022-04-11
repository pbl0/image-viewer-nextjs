cd assets;
echo "[" > ../test.json;
for f in *; do
  res=$(identify -format "%wx%h" $f);
  echo -e "   " {'"name":' "\x22$f\x22", '"res":' "\x22$res\x22"}, >> ../test.json
done
echo "]" >> ../test.json;
sed -i '1h;1!H;$!d;g;s/\(.*\),/\1/' ../test.json;
