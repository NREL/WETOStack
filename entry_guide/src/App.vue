<script setup lang="ts">
import { markRaw } from 'vue'
import type { Node, Edge } from '@vue-flow/core'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import { MiniMap } from '@vue-flow/minimap'
import '@vue-flow/core/dist/style.css'
import '@vue-flow/minimap/dist/style.css'
import DecisionNode from './DecisionNode.vue'
import ToolNode from './ToolNode.vue'
import DecisionEdge from './DecisionEdge.vue'
import { nodes, edges } from "./graphData";


// Utilities

// Toggle the state of a node
const toggleState = (nodeId: string) => {
  const node: Node = nodes.value.find((n: Node) => n.id === nodeId);
  if (!node) return;

  // Toggle state
  node.data.state = node.data.state === "a" ? "b" : "a";
  // console.log(`Node ${nodeId} state: ${node.data.state}`);

  setReachable("1");
};

const setReachable = (startNodeId: string) => {
  const queue = [startNodeId];

  nodes.value.forEach((node: Node) => {
    node.data.reachable = false;
  });
  edges.value.forEach((edge: Edge) => {
    edge.data.reachable = false;
  });

  while (queue.length > 0) {
    const current = queue.shift()!;

    const node: Node = nodes.value.find((n: Node) => n.id === current);
    node.data.reachable = true;
    
    // Find outgoing edges with label matching the current node state
    edges.value.forEach((edge: Edge) => {
      if (
        edge.source === node.id             // Edge starts at current node
        && edge.label === node.data.state   // Edge label matches current node state, a or b
        && !node.data.reachable) {          // Target node has not been visited; if it has, this could lead to an infinite loop
        
        edge.data.reachable = true;
        queue.push(edge.target);
      }
    });
  }
};

// Initialization
setReachable("1");


// Execution

// Vue Flow store
const { onNodeClick } = useVueFlow();

onNodeClick((event) => {
  if (event?.node?.id) {
    toggleState(event.node.id);
  }
});

</script>


<template>
  <div class="app">
    <h1>Entry Guide: Estimate Performance</h1>
    <VueFlow
      :nodes="nodes"
      :edges="edges"
      :edgeTypes="{ decisionEdge: markRaw(DecisionEdge) }"
      :fit-view-on-init=true
      >
      <template #node-decision>
        <DecisionNode />
      </template>

      <template #node-tool>
        <ToolNode />
      </template>

      <template #edge-decision>
        <DecisionEdge />
      </template>

      <MiniMap />
    </VueFlow>
  </div>
</template>

<style scoped>
.app {
  text-align: center;
  height: 100vh;
}
</style>
