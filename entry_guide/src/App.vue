<script setup lang="ts">
import { ref } from 'vue'  
import type { Node, Edge } from '@vue-flow/core'  
import { VueFlow, useVueFlow } from '@vue-flow/core'
import { MiniMap } from '@vue-flow/minimap'
import '@vue-flow/core/dist/style.css'
import '@vue-flow/minimap/dist/style.css'

const { updateNode } = useVueFlow()

import { nodes, edgesTemplate } from "./graphData";

const nodeStates: { [key: string]: string } = {
  "1": "0",
  "2": "0",
}

// Toggle the state of a node
const toggleState = (node: Node) => {
  nodeStates[String(node.id)] = nodeStates[String(node.id)] === "0" ? "1" : "0";
  console.log(`Node ${node.id} state: ${nodeStates[node.id]}`);
  updateNodeStyle(node);
};

// Determine reachable nodes dynamically
const getReachableNodes = (startNodeId: string) => {
  const reachable = new Set<string>();
  const queue = [startNodeId];

  while (queue.length > 0) {
    const current = queue.shift()!;
    reachable.add(current);

    // Find outgoing edges with label matching the current node state
    edgesTemplate.forEach((edge) => {
      if (edge.source === current && edge.label === nodeStates[edge.source] && !reachable.has(edge.target)) {
        queue.push(edge.target);
      }
    });
  }

  return reachable;
};

const reachableNodes = getReachableNodes("1");

// Add dynamic styles to nodes
const updateNodeStyle = (node: Node) => (
  updateNode(node.id, {
    id: node.id,
    position: {...node.position},
    data: {
      ...node.data,
      label: node.data.label,
    },
    style: {
      backgroundColor: reachableNodes.has(node.id) ? "#28a745" : "#ccc",
      color: "#fff",
      padding: "8px",
      borderRadius: "4px",
      textAlign: "center",
    }
  })
);

// const { styledNodes } = useVueFlow() // Consider using useVueFlow for access to internal state
const styledNodes = ref<Node[]>(
  nodes.map((node) => ({
    id: node.id,
    position: {...node.position},
    data: {
      ...node.data,
      label: node.data.label,
    },
    style: {
      backgroundColor: reachableNodes.has(node.id) ? "#28a745" : "#ccc",
      color: "#fff",
      padding: "8px",
      borderRadius: "4px",
      textAlign: "center",
    }
  }))
);

// Update edges to reflect state
const styledEdges = ref<Edge[]>(
  edgesTemplate.map((edge) => ({
    ...edge,
    type: "smoothstep",
    style: {
      stroke: edge.label === "0" ? "green" : "red",
      strokeWidth: 2,
    },
  }))
);
</script>

<template>
  <div class="app">
    <h1>Entry Guide: Estimate Performance</h1>
    <VueFlow
      :nodes="styledNodes"
      :edges="styledEdges"
      @node-click="toggleState($event.node)"
      :fit-view-on-init=true
      >
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
