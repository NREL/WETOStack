<script setup lang="ts">
import { ref } from 'vue';

import Tabs from './Tabs.vue';
import ControlsTab from './tabs/ControlsTab.vue';
import CostsTab from './tabs/CostsTab.vue';
import DataTab from './tabs/DataTab.vue';
import DesignTab from './tabs/DesignTab.vue';
import MetoceanTab from './tabs/MetoceanTab.vue';
import PerformanceTab from './tabs/PerformanceTab.vue';

const tabList = ref([
  { title: 'Controls', component: ControlsTab },
  { title: 'Costs', component: CostsTab },
  { title: 'Data', component: DataTab },
  { title: 'Design', component: DesignTab },
  { title: 'Metocean', component: MetoceanTab },
  { title: 'Performance', component: PerformanceTab }
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
