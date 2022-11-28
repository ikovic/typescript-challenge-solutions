// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<
    Equal<MyExclude<string | number | (() => void), Function>, string | number>
  >
];

// ============= Your Code Here =============
/* 
T is a union type so for each union member we test if it extends U.
If it does, it means it is equal to U so we don't include it in the return
type by returning never.
*/
type MyExclude<T, U> = T extends U ? never : T;
