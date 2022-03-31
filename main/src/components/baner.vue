<template>
    <div >
      <input id="button" class="circle" type="button" value="СТАРТ" v-on:click="baner">
      <div class="ban_block" id="ban_block">
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
      banblock.remove();
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
background-color: black;
opacity: 0.5;
height: 120vh;
width: 120vw;
z-index: 1;
}
.circle:hover {background: #0078BF; color: #fff;}

.circle:active {
  background-color: green;
}
.circle {
    text-align: center;
    position:fixed;
border-radius: 2px;
width: calc(250px + (1500 - 250) * ((100vw - 500px) / (1920 - 500)));
    height: calc(250px + (1500 - 250) * ((100vw - 500px) / (1920 - 500)));
    /* width: 1000px;
    calc([min size]px+([max size] — [min size])*((100vw — [min vw w]px)/([max vw w] — [min vw w])))
    height: 1000px;*/
    background-color: red;
    border-radius: 50%;
    /* не забываем о кроссбраузерности */
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    -khtml-border-radius: 50%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
 margin: auto;
    z-index: 100;
font-size: 3vw
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
