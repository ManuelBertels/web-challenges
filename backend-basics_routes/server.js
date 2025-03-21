import { createServer } from "node:http";

// export const server = …

export const server = createServer((req, res) => {
  if (req.url === "/api/fish/1") {
    res.statusCode = 200;
    res.end("Shrimps");
  }
  if (req.url === "/api/fish/2") {
    res.statusCode = 200;
    res.end("Anemonefish");
  }

  if (req.url === "/") {
    res.statusCode = 404;
    res.end("Server not found");
  }
});
