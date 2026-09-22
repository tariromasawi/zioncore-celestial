import { test } from "node:test";
import assert from "node:assert/strict";
import { discover } from "../connectors/github/index.js";
test("github public discover", async () => {
  const r = await discover({ username: "tariromasawi" });
  assert.equal(r.status, "FOUND");
  assert.ok(r.records.length >= 5);
});
