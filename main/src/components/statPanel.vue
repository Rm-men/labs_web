<template>
<!-- eslint-disable -->
    <div id="statsPanel" class="Panel">
        <div class=" iconPanel block">
                <img src="../img/list.svg" alt="" class="">
        </div>
        <div class="inners block b-c">
            <p class="ta-c pinkText" style="font-size: 13px;">{{ msg }}</p>
        </div>
        <div class=" block b-r pinc" >
            <p class="ta-c pinkText" >10</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default Vue.extend({
  name: 'App',
  props: {
    msg: String,
  },
  components: {
  },
});
</script>

<style >
    .iconPanel {
        width: 100%;
        height: 50px;
        background-color: white;
    }
    .iconPanel>img {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 80%;
    }
    .block {
        display: inline-block;
        /*Задаем блочно-строчное отображение*/
        width: 18px;
        /*задаем ширину блока*/
    }
    .Panel {
        width: 183px;
        height: 50px;
        background: white;
        position: relative;
    }
    .outers {
        width: 183px;
        height: 50px;
        background: white;
    }
    .inners {
        width: 120px;
        margin: auto;
    }
    .bblock {
        float: left;
        /*Задаем обтекание*/
        /*Высота строки +  верт. центрирования текста*/
        font-size: 15px;
        color: palevioletred;
        /*Фиксируем ширину блока*/
        text-align: center;
        /*Центрируем текст по горизонтали*/
    }
    .b-l {
        float: left;
    }
    .b-r {
        float: right;
        margin-right: 13%;
    }
    .b-c {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
    }
    .ta-c {
        text-align: center;
    }
    .pinkText {
      font-family: 'Roboto Slab';
      font-style: normal;
        margin-top:25px;
      height: 10px;
        font-size: 30px;
        line-height: 0px;
/* identical to box height */
color: #FB8694;
    }
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;900&display=swap');
</style>
