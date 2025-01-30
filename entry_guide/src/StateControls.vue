<script setup lang="ts">
import { Panel, useVueFlow } from '@vue-flow/core'
import StateControlsIcon from './StateControlsIcon.vue'
import type { Node } from '@vue-flow/core'
import { useScreenshot } from './Screenshot'

const { capture } = useScreenshot()

const {
  nodes,
  edges,
  // addNodes,
  // dimensions,
  // toObject,
  // fromObject,
  vueFlowRef
} = useVueFlow()

function onReset() {
  nodes.value.forEach((node: Node) => {
    node.data.state = null
    node.data.reachable = false
  });

  edges.value.forEach((edge) => {
    edge.data.reachable = false
  });
}

function onScreenshot() {
  if (!vueFlowRef.value) {
    console.warn('VueFlow element not found')
    return
  }
  capture(vueFlowRef.value, { shouldDownload: true })

}

// function onAdd() {
//   const id = nodes.value.length + 1

//   const newNode = {
//     id: `random_node-${id}`,
//     label: `Node ${id}`,
//     position: { x: Math.random() * dimensions.value.width, y: Math.random() * dimensions.value.height },
//   }

//   addNodes([newNode])
// }
</script>

<template>
  <Panel position="top-right">
    <div class="buttons">
      <button title="reset graph" @click="onReset">
        <StateControlsIcon name="reset" />
      </button>
      <button title="save screen shot" @click="onScreenshot">
        <StateControlsIcon name="screenshot" />
      </button>
      <!-- <button title="add random node" @click="onAdd">
        <StateControlsIcon name="add" />
      </button> -->
    </div>
  </Panel>
</template>
