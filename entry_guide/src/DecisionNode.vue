<script setup lang="ts">
import { useNode } from "@vue-flow/core";

const { node } = useNode();

const isA = (state: string) => {
  return state === "a";
};
const isB = (state: string) => {
  return state === "b"
};

</script>

<template>
  <div :class="{'reachable': node.data.reachable}" class="node">
    <span :class="{'bold': isA(node.data.state)}" class="label">{{ node.data.a }}</span> |
    <span :class="{'bold': isB(node.data.state)}" class="label">{{ node.data.b }}</span>
  </div>
</template>

<style scoped>
.label {
  font-weight: normal;
  color: black;
}
.bold {
  font-weight: bold;
}
.node {
  padding: 8px;
  border-radius: 4px;
  text-align: center;
  background-color: #ccc;
}
.reachable {
  background-color: #28a745;
}
</style>
