import type { Graph } from "../src";

type Case = {
  graph: Graph;
  expected: string[][] | null;
};

export const cases: Case[] = [
  {
    graph: {
      root: "a",
      edges: {
        "a": ["b", "c"],
        "b": ["d"],
        "c": ["d"],
      },

    },
    expected: [["a"], ["b", "c"], ["d"]],
  },
  {
    graph: {
      root: "a",
      edges: {
        "a": ["b", "c", "e"],
        "c": ["b", "d"],
        "b": ["d"],
      },
    },
    expected: [["a"], ["c", "e"], ["b"], ["d"]],
  },
  {
    graph: {
      root: "a",
      edges: {
        "a": ["b", "c", "e"],
        "c": ["b", "d", "f"],
        "b": ["d"],
      },
    },
    expected: [["a"], ["c", "e"], ["b", "f"], ["d"]],
  },

];
