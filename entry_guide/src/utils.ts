
import type { Node, Edge } from '@vue-flow/core';

// Toggle the state of a node
export const toggleState = (nodes: Node[], edges: Edge[], nodeId: string) => {
    const node: Node = nodes.find((n: Node) => n.id === nodeId);
    if (!node) return;

    // Toggle state
    node.data.state = node.data.state === "a" ? "b" : "a";
    // console.log(`Node ${nodeId} state: ${node.data.state}`);

    setReachable(nodes, edges, "1");
};

export const setReachable = (nodes: Node[], edges: Edge[], startNodeId: string) => {

    nodes.forEach((node: Node) => {
        node.data.reachable = false;
    });
    edges.forEach((edge: Edge) => {
        edge.data.reachable = false;
    });

    const queueNodes = [startNodeId];
    while (queueNodes.length > 0) {
        const current = queueNodes.shift()!;

        const node: Node = nodes.find((n: Node) => n.id === current);
        node.data.reachable = true;

        // Find outgoing edges with label matching the current node state
        edges.forEach((edge: Edge) => {
            if (
                edge.source === node.id             // Edge starts at current node
                && edge.label === node.data.state   // Edge label matches current node state, a or b
            ) {
                // This previously checked for whether the node was already checked for reachability
                // && !node.data.reachable          // Target node has not been visited; if it has, this could lead to an infinite loop
                // and avoided repeating. This prevented infinite loops if the graph had cycles.
                // After a design change, the check is not necessary but it could be an issue if the
                // graph includes cycles in the future. The appropriate check is whether the edge's
                // target node is reachable.

                edge.data.reachable = true;
                queueNodes.push(edge.target);
            }
        });
    }
};
