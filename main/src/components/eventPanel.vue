<template>
<!-- eslint-disable -->
    <div class="eventPanel">
        <p class="textTasks tastTextMargin">Next events</p>
        <event-text class="eventBlockMargin inLineblock"></event-text>
        <event-text class="eventBlockMargin inLineblock"></event-text>
        <event-text class="eventBlockMargin inLineblock"></event-text>
        <p class="textTasks tastTextMargin">Events this month</p>
        <event-text class="eventBlockMargin inLineblock"></event-text>
        <event-text class="eventBlockMargin inLineblock"></event-text>
        <event-text class="eventBlockMargin inLineblock"></event-text>
        <p class="textTasks tastTextMargin">Events next month</p>
        <event-text class="eventBlockMargin inLineblock"></event-text>
        <event-text class="eventBlockMargin inLineblock"></event-text>
        <event-text class="eventBlockMargin inLineblock"></event-text>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EventText from './eventText.vue';
import TaskText from './taskText.vue';

export default Vue.extend({
  name: 'App',
  props: {
  },
  components: {
    EventText,
  },
});
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
    .inLineblock {
        display: inline-block;
    }
    .textTasks{
font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        /* identical to box height */

        display: flex;
        align-items: center;
        text-align: center;
        text-decoration-line: underline;

        color: #6C6CEA;
    }
    .tastTextMargin {
        margin: 20px;
    }
    .eventBlockMargin {
        margin: 10px;
    }
    .eventPanel {
        margin-top: 10px;
        margin-bottom: 10px;
        min-width: 250px;
        max-width: calc(100% - 450px);
    }
         @media (max-width: 732px) {
    .eventPanel{
    max-width: 500px;
    margin: 0 auto;
    };
        .tastTextMargin {
        margin: 20px;
        margin: 0 auto;
          text-align: center;
    }
}
</style>
