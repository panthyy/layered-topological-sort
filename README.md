
# Layered Topological Sort

> [!WARNING]  
> This package does not support cycles in the graph and will go into an infinite loop if there are any.

A TypeScript implementation of a layered topological sorting algorithm for directed acyclic graphs (DAGs).

# What is this?

This is a TypeScript implementation of a layered/leveled topological sorting algorithm for directed acyclic graphs (DAGs).

Its a 2 pass algorithm that first groups the nodes into layers, then finally removes duplicates on the reverse pass.

This is useful for tasks that require you to know which of the nodes are on the same level/layer of a graph. and specifically useful for figuring out if you can execute certain nodes simultaneously.

## Installation

```bash
npm install layered-topological-sort
```

## Usage

```typescript
import { Sort, type Graph } from "layered-topological-sort";

const graph: Graph = {
    root: "A",
    edges: {
        "A": ["B", "C"],
        "B": ["D"],
        "C": ["E", "F"],
        "D": ["G"],
        "E": [],
        "F": [],
    }
}

const sortedLayers = Sort(graph);

console.log(sortedLayers); // [["A"], ["B", "C"], ["D", "E", "F"], ["G"]]
```





