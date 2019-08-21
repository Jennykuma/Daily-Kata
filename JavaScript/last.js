/*
99 Problems, #1: last in list
Level: 7 kyu

Write a function last that accepts a list and returns the last element in the list.

If the list is empty:

In languages that have a built-in option or result type (like OCaml or Haskell), return an empty option

In languages that do not have an empty option, just return null
*/

const last = xs => {
  return xs.length == 0 ? null : xs[xs.length-1]
}
