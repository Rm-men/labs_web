<template>
<!-- eslint-disable max-len -->
    <div class="lefter">
        <div class="iconOnCenter">
            <img src="../img/data_round.svg" alt="" class="icon">
        </div>
        <div class="iconOnCenter">
            <img src="../img/task.svg" alt="" class="icon">
        </div>
        <div class="iconOnCenter">
            <img src="../img/kalendar.svg" alt="" class="icon">
        </div>
    </div>
<!-- eslint-enable max-len -->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

const url = 'http://localhost:8080/admission/';

export default Vue.extend({
  name: 'App',
  props: {
    results: [],
  },
  components: {
  },
});
</script>

<style >
    .icon {
        margin: 10px;
        width:  3vw;
        height: 3vw;
    }
    .lefter {
        height: 94vh;
        width: 5%;
        float: left;
        background: white;
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
        left: -7%;
        right: 0;
        top: 22.5%;
    }
    .iconOnCenter {
        margin-top: 1.1vw;
        text-align: center;
    }

    .lefting {
        float: left;
    }
    .leftBlock {
        float: left;
        height: 95vh;
        width: 5vh;
    }
         @media (max-width: 732px) {
    .lefter {
        height: 94vh;
        width: 12%;
        float: left;
        background: white;
    }
    .icon {
        margin: 10px;
        width:  6vw;
        height: 6vw;
    }
}
</style>
