<script setup lang="ts">
import { ref, computed } from 'vue';
import type { TabItem } from './types';

const props = defineProps<{
    tabs: TabItem[];
}>();

const selectedTab = ref(0);

function selectTab(index: number) {
    selectedTab.value = index;
}

const activeTab = computed(() => props.tabs[selectedTab.value]);

</script>

<template>
    <div>
        <div class="tabs">
            <div v-for="(tab, index) in tabs" :key="index" class="tab" :class="{ active: selectedTab === index }"
                @click="selectTab(index)">
                {{ tab.title }}
            </div>
        </div>

        <div class="tab-content">
            <slot :active-tab="activeTab" />
        </div>
    </div>
</template>

<style scoped>
.tabs {
    display: flex;
    margin-bottom: 1em;
}

.tab {
    padding: 1em;
    margin-right: 0.5em;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    border-color: #42b983;
}

.tab.active {
    border-color: #42b983;
    font-weight: bold;
}

.tab-content {
    padding: 1em;
    border: 1px solid #ddd;
}
</style>
