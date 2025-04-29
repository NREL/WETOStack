<script setup lang="ts">
import { ref } from 'vue';

import Tabs from './Tabs.vue';
import PerformanceTab from './tabs/PerformanceTab.vue';
import CostsTab from './tabs/CostsTab.vue';

const tabList = ref([
  { title: 'Performance', component: PerformanceTab },
  { title: 'Costs', component: CostsTab }
]);

</script>

<template>
  <div class="app">
    <h1>Entry Guide</h1>

    <div class="tab_container">
      <Tabs :tabs="tabList">
          <template #default="{ activeTab }">
              <component :is="activeTab.component" />
          </template>
      </Tabs>
    </div>
  </div>
</template>

<style scoped>
.app {
  text-align: center;
  height: 100vh;
}
.tab_container {
  width: 80vw;
  text-align: center;
}
</style>
