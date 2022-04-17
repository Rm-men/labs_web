<template>
<!-- eslint-disable max-len -->
    <div id="MainBlock" class="right">
        <stats-bars class="blockMargin infoBlock"></stats-bars>
        <div class="infoBlock">
            <task-panel class="inLineblock blockMargin"></task-panel>
            <stik class="inLineblock blockMargin"></stik>
            <event-panel class="inLineblock eventPanelMargin"></event-panel>
        </div>
    </div>
<!-- eslint-enable max-len -->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import StatsBars from './statsBar.vue';
import TaskPanel from './taskPanel.vue';
import EventPanel from './eventPanel.vue';
import Stik from './stik.vue';

const url = 'http://localhost:8080/admission/';

export default Vue.extend({
  components: {
    StatsBars,
    TaskPanel,
    EventPanel,
    Stik,
  },
});
</script>

<style >
    .blockMargin {
        margin: 8px;
    }
    .inLineblock {
        display: inline-block;
    }
    .right {
        height: 100vh;
        width: 88%;
        float: right;
    }
    .right {
        float: left;
        margin: 0;
    }
    body {
        margin: 0;
        background-color: #FFE6EA;
    }
    .eventBlockMargin {
        margin: 10px;
    }
    .eventPanelMargin {
        margin-top: 10px;
        margin-bottom: 10px;
    }
     @media (max-width: 732px) {
         .infoBlock {
            margin: 0 auto;
            max-width: 430px;
         }
}
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;900&display=swap');
</style>
