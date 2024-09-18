
export type Graph = {
  root: string;
  nodes: string[];
  edges: { [key: string]: string[] };
};


/**
 * Sort the graph into layers
 * @param graph 
 * @returns 
 */
export function Sort(graph: Graph): string[][] | null {
  if (graph.nodes.length === 0) return null;

  const layers: string[][] = [[graph.root]];
  const queue: string[][] = [[graph.root]];

  while (queue.length > 0) {
    const currentLayer = queue.pop();
    if (!currentLayer) break;

    const targets = currentLayer.reduce((acc, node) => {
      const outgoingEdges = graph.edges[node];
      if (!outgoingEdges) return acc;
      for (const neighbor of outgoingEdges) {
        acc.add(neighbor);
      }
      return acc;
    }, new Set<string>());


    if (targets.size > 0) {
      const arr = Array.from(targets);
      queue.push(arr)
      layers.push(arr)
    }

  }

  const visited = new Set<string>();

  for (let i = layers.length - 1; i >= 0; i--) {
    layers[i] = layers[i].filter(node => {
      if (visited.has(node)) {
        return false;
      } else {
        visited.add(node);
        return true;
      }
    });

  }


  return layers
}

