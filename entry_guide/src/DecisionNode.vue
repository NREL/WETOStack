<script setup lang="ts">
import { useNode } from '@vue-flow/core'

const { node } = useNode();

const isA = (state: string) => {
  return state === "a";
};
const isB = (state: string) => {
  return state === "b"
};

</script>

<template>
  <div>
    <span :class="{'bold': isA(node.data.state)}" class="label">{{ node.data.a }}</span> |
    <span :class="{'bold': isB(node.data.state)}" class="label">{{ node.data.b }}</span>
  </div>
</template>

<style>
.label {
  font-weight: normal;
  color: "white";
}
.bold {
  font-weight: bold;
}
</style>