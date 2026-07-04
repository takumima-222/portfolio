const { test } = require("node:test");
const assert = require("node:assert/strict");
const { isValidEmail } = require("../script.js");

test("accepts a standard email address", () => {
  assert.equal(isValidEmail("user@example.com"), true);
});

test("accepts an email with a subdomain and plus tag", () => {
  assert.equal(isValidEmail("user+tag@mail.example.co.jp"), true);
});

test("rejects an address without an @", () => {
  assert.equal(isValidEmail("user.example.com"), false);
});

test("rejects an address without a domain", () => {
  assert.equal(isValidEmail("user@"), false);
});

test("rejects an address containing a space", () => {
  assert.equal(isValidEmail("user @example.com"), false);
});

test("rejects an empty string", () => {
  assert.equal(isValidEmail(""), false);
});
