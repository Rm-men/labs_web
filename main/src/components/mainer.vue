<template>
<!-- eslint-disable max-len -->
    <div id="MainBlock" class="right">
        <div class="infoBlock">
            <stats-bars class="blockMargin infoBlockStatus"></stats-bars>
            <task-panel class="inLineblock blockTaskMargin"></task-panel>
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
    .blockTaskMargin {
        margin: 8px;
         vertical-align:top;
    }
    .inLineblock {
        display: inline-block;
    }
    .right {
        height: 100vh;
        width: 95%;
        float: right;
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
    .infoBlock {
        width: 95vw;
         }
    .infoBlockStatus {
                    text-align:left;
         }
     @media (max-width: 765px) {
         .infoBlock {
            margin: 0 auto;
            text-align:center;
            float: left;
            width: 80vw;
         }
        .infoBlockStatus {
            width: 640px;
            margin: 0 auto;
            display: block;
         }
            .blockTaskMargin {
        margin: 8px;
        margin: 0 auto;
    }
        .right {
        height: 100vh;
        width: 80%;
        float: left;
    }
}
     @media (max-width: 703px) {
        .infoBlockStatus {
            width: 440px;
            margin: 0 auto;
            display: block;
         }
}
     @media (max-width: 703px) {
        .infoBlockStatus {
            width: 440px;
            margin: 0 auto;
            display: block;
         }
}
 @media (max-width: 539px) {
         .infoBlock {
        width: 100vw;
         }
 }
  @media (max-width: 442px) {
            .infoBlockStatus {
            width: 240px;
         }
 }
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;900&display=swap');
</style>
