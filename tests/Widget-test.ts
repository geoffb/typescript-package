import * as test from "tape";
import { Widget } from "..";

test("Widget", (t) => {
  const e = new Widget();
  t.ok(e instanceof Widget);
  t.end();
});
