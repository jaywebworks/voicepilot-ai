// Serves the built site (the /out folder) at http://localhost:3800 so you can click around it.
// Run with: npm run preview   (after npm run build)
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { exec } from "node:child_process";
import { extname, join, normalize } from "node:path";

const OUT = join(process.cwd(), "out");
const PORT = Number(process.env.PORT || 3800);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".txt": "text/plain",
  ".xml": "application/xml",
  ".json": "application/json",
  ".mp4": "video/mp4",
};

const server = createServer(async (req, res) => {
  let file = normalize(join(OUT, decodeURIComponent(new URL(req.url, "http://x").pathname)));
  if (!file.startsWith(OUT)) return res.writeHead(403).end();
  try {
    if ((await stat(file)).isDirectory()) file = join(file, "index.html");
    res.writeHead(200, { "Content-Type": types[extname(file)] || "application/octet-stream" });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(await readFile(join(OUT, "404.html")).catch(() => "Not found"));
  }
});

// If the port is taken (e.g. the site is already open in another window), try the next one.
let port = PORT;
server.on("error", (err) => {
  if (err.code === "EADDRINUSE" && port < PORT + 20) {
    port += 1;
    server.listen(port);
  } else {
    console.error(err);
    process.exit(1);
  }
});

server.listen(port);
server.on("listening", () => {
  const url = `http://localhost:${port}/`;
  console.log(`\n  Site running at ${url}\n  Close this window (or press Ctrl+C) to stop it.\n`);
  if (process.argv.includes("--open")) {
    const cmd = process.platform === "win32" ? `start "" ${url}` : process.platform === "darwin" ? `open ${url}` : `xdg-open ${url}`;
    exec(cmd);
  }
});
