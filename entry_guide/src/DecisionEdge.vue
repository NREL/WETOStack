<script setup lang="ts">
import { useEdge } from "@vue-flow/core";
import { computed } from "vue";

const { edge } = useEdge();

// Compute the SVG path for the edge
const edgePath = computed(() => {
  const { sourceX, sourceY, targetX, targetY } = edge
  return `M${sourceX},${sourceY} L${targetX},${targetY}`
})

</script>

<template>
  <path
    :d="edgePath"
    :class="{'reachable': edge.data.reachable}"
    class="decision-edge"
  />
</template>

<style scoped>
.decision-edge {
  stroke: grey;
  stroke-width: 1;
  fill: none;
  transition: stroke 0.1s ease-in-out, stroke-width 0.1s ease-in-out;
}
.reachable {
  stroke: green;
  stroke-width: 2;
}
</style>
