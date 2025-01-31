<script setup lang="ts">
import { nextTick, ref, markRaw } from 'vue'
import type { Node, Edge } from '@vue-flow/core'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import { MiniMap } from '@vue-flow/minimap'
import { Background } from '@vue-flow/background'

import DecisionNode from './DecisionNode.vue'
import ToolNode from './ToolNode.vue'
import DecisionEdge from './DecisionEdge.vue'
import SummaryPanel from './SummaryPanel.vue';
import StateControls from './StateControls.vue'
import { useLayout } from './Layout'

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
  nodes.value.forEach((node: Node) => {
    node.data.reachable = false;
  });
  edges.value.forEach((edge: Edge) => {
    edge.data.reachable = false;
  });

  const queueNodes = [startNodeId];
  while (queueNodes.length > 0) {
    const current = queueNodes.shift()!;

    const node: Node = nodes.value.find((n: Node) => n.id === current);
    node.data.reachable = true;
    
    // Find outgoing edges with label matching the current node state
    edges.value.forEach((edge: Edge) => {
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

// Initialization
setReachable("1");

const { layout } = useLayout()
const { fitView } = useVueFlow()

async function layoutGraph(direction: string) {
  nodes.value = layout(nodes.value, edges.value, direction)

  nextTick(() => {
    fitView()
  })
}

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
      @nodes-initialized="layoutGraph('TD')">

      <StateControls />

      <SummaryPanel />

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

      <Background />

    </VueFlow>
  </div>
</template>

<style scoped>
.app {
  text-align: center;
  height: 75vh;
}
</style>
