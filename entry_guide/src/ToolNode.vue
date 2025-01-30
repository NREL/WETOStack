<script setup lang="ts">
import { useNode } from '@vue-flow/core';

const { node } = useNode();

</script>

<template>
  <div :class="{'reachable': node.data.reachable}" class="node">
    <span :class="{'bold': node.data.reachable}" class="label">{{ node.data.label }}</span>
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
