<template>
<!-- eslint-disable max-len -->
    <div id="MainBlock" class="right">
        <stats-bars></stats-bars>
    </div>
<!-- eslint-enable max-len -->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import StatsBars from './statsBar.vue';

const url = 'http://localhost:8080/admission/';

export default Vue.extend({
  components: {
    StatsBars,
  },
});
</script>

<style >
    .header {
        height: 6vh;
        background-color: white;
        align-items: center;
        line-height: 200px;
    }
    .titleMargin {
        align-items: left;
        position: absolute;
        left: 12%;
        right: 0;
        top: 2.5%;
        transform: translateY(-50%);
    }
    .taskIcon {
        position: absolute;
        left: -5%;
        right: 0;
        top: 22.5%;
    }
        .purpleText {
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 35px;
        align-items: center;
        color: #6C6CEA;
        margin: 0;
    }
        .left {
        height: 100vh;
        width: 5%;
        float: left;
        background: white;
    }
    .right {
        height: 100vh;
        width: 93%;
        float: right;
    }
    body {
        margin: 0;
        background-color: #FFE6EA;
    }
    .lefting {
        float: left;
    }
    .icon {
        margin: 5px;
    }
    .pinkBackGround {
        background-color: pink;
        width: 100vh;
        height: 95vh;
    }
    .leftBlock {
        float: left;
        height: 95vh;
        width: 5vh;
    }
    .purpleText {
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 35px;
        align-items: center;
        color: #6C6CEA;
        margin: 0;
    }
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;900&display=swap');
</style>
