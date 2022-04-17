<template>
<!-- eslint-disable -->
    <div class="tastTextMargin">
        <p class="textTasks tastTextMargin">Tasks in progress</p>
        <task-text class="tastTextMargin"></task-text>
        <task-text class="tastTextMargin"></task-text>
        <task-text class="tastTextMargin"></task-text>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TaskText from './taskText.vue';

export default Vue.extend({
  name: 'App',
  props: {
  },
  components: {
    TaskText,
  },
});
</script>

<style >
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;900&display=swap');
    .textTasks{
        font-family: 'Roboto Slab';
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
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;900&display=swap');
        .textTasksDate{
font-family: 'Roboto Slab';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 16px;
/* identical to box height */

display: flex;
align-items: center;
text-align: justify;

color: #6C6CEA;
    }
    .tastTextMargin {
        margin: 15px;
    }
</style>
