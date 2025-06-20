<script setup lang="ts">
import { computed } from 'vue'
import { Panel, useVueFlow } from '@vue-flow/core'
import type { Node } from '@vue-flow/core'

const { nodes } = useVueFlow()

// Find all nodes that are end type="tool" and reachable=true
const softwareList = computed(() => {
  return nodes.value.filter((node: Node) => node.type === 'tool' && node.data.reachable === true)
})

</script>

<template>
  <Panel position="top-left">
    <div class="summary-panel">
      <h2>Software List</h2>
      <ul class="software-list">
        <li v-for="software in softwareList" :key="software.id">
          {{ software.data.label }}
        </li>
      </ul>
    </div>
  </Panel>
</template>

<style scoped>
.summary-panel {
  padding: 16px;
  background-color: #f9f9f9;
  border: 2px solid #28a745;
  border-radius: 8px;
  text-align: left;
}
.software-list {
  font-size: 1em;
}
.software-list li:hover {
  background-color: #e0ffe0;
}
</style>
