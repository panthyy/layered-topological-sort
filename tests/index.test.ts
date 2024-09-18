import { expect, test } from "vitest";
import { cases } from "./fixtures";
import { Sort } from "../src";

test("should pass", () => {
  for (const { graph, expected } of cases) {
    const sortedLayers = Sort(graph);
    expect(sortedLayers).toEqual(expected);
  }
});

