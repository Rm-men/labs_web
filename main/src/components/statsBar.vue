<template>
<!-- eslint-disable max-len -->
    <div id="statsBar" class="statsBar">
        <StatsPanel class="barBlock" msg="To Do"/>
        <TimePanel class="barBlock" msg="In progress"></TimePanel>
        <panel-ok class="barBlock" msg="Done Today"/>
        <panel-ok class="barBlock" msg="Done this week"/>
        <panel-ok class="barBlock" msg="Done this month"/>

    </div>
<!-- eslint-enable max-len -->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PanelOk from './PanelOk.vue';
import StatsPanel from './statPanel.vue';
import TimePanel from './TimePanel.vue';

export default Vue.extend({
  name: 'App',
  components: {
    StatsPanel,
    TimePanel,
    PanelOk,
  },
});
</script>
<style >
.statsBar {
    display: block;
    margin: 20px;
    margin-left: 20px;
}

.barBlock {
    display: inline-block;
    margin: 20px;
}

</style>
