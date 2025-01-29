<script setup>
import { useNode } from '@vue-flow/core'

const { node } = useNode();

</script>

<template>
  <div>{{ node.data.a }} | {{ node.data.b }}
  </div>
</template>
