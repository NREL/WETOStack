<script setup>
import { useNode } from '@vue-flow/core'

const { node } = useNode();

</script>

<template>
  <div>{{ node.data.label }}
  </div>
</template>
