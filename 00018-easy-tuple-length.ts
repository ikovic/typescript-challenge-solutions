// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
const spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT",
] as const;

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<"hello world">
];

// ============= Your Code Here =============

/* 
readonly is there because the examples are declared as const
we don't know or care about the element types so any[] is OK
since these arrays have constant length the type of their 
length property will be set to the exact numerical value
instead of the more vague number type
*/
type Length<T extends readonly any[]> = T["length"];
