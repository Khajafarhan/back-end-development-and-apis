const assert = require("assert/strict");
const { isPrime } = require("./index");

assert.strictEqual(isPrime(2), true);
assert.strictEqual(isPrime(7), true);
assert.strictEqual(isPrime(4), false);
assert.strictEqual(isPrime(10), false);
