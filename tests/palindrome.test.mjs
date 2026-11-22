import { isPalindrome } from "../src/palindrome.js";
import assert from "node:assert/strict";
assert.equal(isPalindrome("Level"), true);
assert.equal(isPalindrome("A man a plan a canal Panama"), true);
assert.equal(isPalindrome("hello"), false);
assert.equal(isPalindrome(""), true);
console.log("ok");
