import { bench, describe, expect, test } from "vitest";
import { cases } from "./fixtures";
import { Sort } from "../src";

describe("benchmark Sort function", () => {
    bench("sort", () => {
        for (const { graph } of cases) {
            Sort(graph);
        }
    })
});
