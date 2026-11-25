// makefun-alien-food-review — One Star, Five Stars for the Food
// One sentence (at most 200 characters): an alien tourist's one-star
// review of Earth that still slips in a real compliment about the food.
// v1: generic alien lines — "glowing rectangles" is the stock alien joke,
// "the weather cannot make up its mind" is a cliche, and the turn ("but
// the noodles were so good") is stated flatly instead of landing.
// v2: sharper outsider bafflement (worshipping rectangles, napping away a
// third of life) and the compliment lands as forgiveness: the noodles are
// so good the tourist forgives the nine-light-year flight itself.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "One star: the locals worship glowing rectangles, nap through a third of their lives, and still queue for noodles so good I forgave the nine-light-year flight.";

mkdirSync(dirname("/output/entry.txt"), { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(entry);
