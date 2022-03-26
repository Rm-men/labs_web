<template>
    <div >
      <input id="button" class="circle navel" type="button" value="СТАРТ" v-on:click="baner">
    <div class="ban_block">
    </div>
    </div>
</template>

<script lang="ts">
export default {
  props: {
    results: [],
  },
  methods: {
    baner() {
      const content = document.getElementById('button');
      const banblock = document.getElementById('ban_block');
      content.style.display = 'none';
      banblock.style.display = 'none';
    },
  },
};
</script>

<style>
.tcvpb_background_center {
    left: 50%;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: 2;
}
.ban_block{
    text-align: center;
        position:fixed;
        bottom:100;
background-color: red;
opacity: 0.1;
height: 100vh;
width: 100vw;
    z-index: 0;
}
.circle:hover {background: #0078BF; color: #fff;}
.circle:focus {
  background-color: black;
}
.circle {

    text-align: center;
        position:fixed;
        bottom:100;
    margin: 100px;
    width: 1000px; /* задаете свои размеры */
    height: 1000px;
    background-color: red;
    border-radius: 50%;
    /* не забываем о кроссбраузерности */
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    -khtml-border-radius: 50%;
    margin:1ch
}
.kybik {
    width: 1000px; /* задаете свои размеры */
    height: 1000px;
    background-color: red;
    /* не забываем о кроссбраузерности */
}
.div-table{
    display: table;
    width: 100%;
    height: 100%;
}

.div-table-cell{
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}
.text{
display: inline-block;
vertical-align: top;
margin: 0 auto;
text-align: center;
margin-left: auto;
margin-right: auto;
display: block;
text-align: center;
}
</style>
