import { createServer } from "node:http";
import Chance from "chance";

// export const server = …

const chance = new Chance();

const a = chance.name();
const b = chance.age();
const c = chance.profession();

export const server = createServer((req, res) => {
  if (req.url === "/hallo") {
    res.end(
      `Hello, my name is ${a}, my age is ${b} and my profession ist ${c}`
    );
  }
});
