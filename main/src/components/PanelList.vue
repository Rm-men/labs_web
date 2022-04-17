<template>
<!-- eslint-disable -->
    <div id="statsPanel" class="Panel">
        <div class=" iconPanel block">
            <img src="../img/ok.png" alt="" class="">
        </div>
        <div class="inners block b-c">
            <p class="ta-c greentext" style="font-size: 12px;">{{ msg }}</p>
        </div>
        <div class=" block b-r pinc" >
            <p class="ta-c greentext" >10</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default Vue.extend({
  name: 'App',
  props: ['msg'],
  components: {
  },
});
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');    .greentext {
font-family: 'Roboto', sans-serif;
      font-style: normal;
            margin-top:23px;
      height: 10px;
        font-size: 30px;
        line-height: 0px;
/* identical to box height */
color: #58BA6E;
    }
</style>
