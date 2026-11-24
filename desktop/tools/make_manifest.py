#!/usr/bin/env python3
"""Prepare a desktop release for updates that download only what changed.

usage: make_manifest.py <payload dir> <out dir> <version> <tag> [notes file]

- <payload dir>/manifest.json: the installed copy (every file with its SHA-256), shipped by the installer.
- <out dir>/desktop-manifest.json: the same, published with the release; the app reads it to find updates.
- <out dir>/assets/<sha256>: one release asset per distinct file. The app compares hashes with the
  installed files and downloads only those that differ.
"""
import hashlib
import json
import os
import shutil
import sys

REPO = "metjus/stlware"


def main():
    payload, out, version, tag = sys.argv[1:5]
    notes = ""
    if len(sys.argv) > 5 and os.path.exists(sys.argv[5]):
        notes = open(sys.argv[5], encoding="utf-8").read().strip()
    assets = os.path.join(out, "assets")
    os.makedirs(assets, exist_ok=True)
    files = []
    for root, _, names in os.walk(payload):
        for name in sorted(names):
            full = os.path.join(root, name)
            rel = os.path.relpath(full, payload).replace(os.sep, "/")
            if rel == "manifest.json":
                continue
            data = open(full, "rb").read()
            sha = hashlib.sha256(data).hexdigest()
            shutil.copyfile(full, os.path.join(assets, sha))
            files.append({
                "path": rel,
                "sha256": sha,
                "size": len(data),
                "url": f"https://github.com/{REPO}/releases/download/{tag}/{sha}",
            })
    files.sort(key=lambda f: f["path"])
    manifest = {"version": version, "notes": notes, "files": files}
    text = json.dumps(manifest, indent=1)
    for path in (os.path.join(payload, "manifest.json"), os.path.join(out, "desktop-manifest.json")):
        with open(path, "w", encoding="utf-8") as f:
            f.write(text)
    total = sum(f["size"] for f in files)
    print(f"{len(files)} files, {total / 1048576:.1f} MB, {len(os.listdir(assets))} distinct")


if __name__ == "__main__":
    main()
