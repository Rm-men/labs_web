<template>
<!-- eslint-disable max-len -->
    <div id="statsBar" class="statsBar">
        <statsPanel class="barBlock blockPink" msg="To Do"/>
        <timePanel class="barBlock" msg="In progress"></timePanel>
        <panel-ok class="barBlock" msg="Done Today"/>
        <panel-ok class="barBlock" msg="Done this week"/>
        <panel-ok class="barBlock" msg="Done this month"/>
    </div>
<!-- eslint-enable max-len -->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PanelList from './PanelList.vue';
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
.blockPink {
    }
.statsBar {
    display: block;
    margin: 2px;
    margin-left: 5px;
}

.barBlock {
    display: inline-block;
    margin: 15px;
}

</style>
