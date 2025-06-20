<script setup lang="ts">

import { nextTick, markRaw } from 'vue';
import { Background } from '@vue-flow/background';
import { VueFlow, useVueFlow } from '@vue-flow/core';

import DecisionNode from '../DecisionNode.vue';
import ToolNode from '../ToolNode.vue';
import DecisionEdge from '../DecisionEdge.vue';
import SummaryPanel from '../SummaryPanel.vue';
import StateControls from '../StateControls.vue';
import { toggleState, setReachable } from '../utils';
import { useLayout } from '../Layout';

import { nodes, edges } from "../data/design";

defineOptions({
    title: '',
    name: ''
});

// Initialization

setReachable(nodes.value, edges.value, "1");

// Execution

// Vue Flow store
const { onNodeClick } = useVueFlow();

onNodeClick((event) => {
    if (event?.node?.id) {
        toggleState(nodes.value, edges.value, event.node.id);
    }
});

const { layout } = useLayout()
const { fitView } = useVueFlow()

async function layoutGraph(direction: string) {
    nodes.value = layout(nodes.value, edges.value, direction)

    nextTick(() => {
        fitView()
    })
}

</script>

<template lang="html">

    <h2>System Design</h2>

    <div class="vueflow_container">
        <VueFlow :nodes="nodes" :edges="edges" :edgeTypes="{ decisionEdge: markRaw(DecisionEdge) }"
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

            <Background />

        </VueFlow>
    </div>
</template>
