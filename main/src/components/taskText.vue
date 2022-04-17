<template>
<!-- eslint-disable -->
    <div class="textBlock">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;900&display=swap" rel="stylesheet">
        <p class="textTextBig">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p class="textText">Sed vitae lobortis nulla, ut vulputate augue. Nullam mollis non ante et consequat. Cras quis dapibus augue. Phasellus nec fermentum mauris. Aenean et eros ut erat gravida rhoncus a et velit.</p>
        <p class="l textTextBig">15 dez 2021</p>
        <img src="../img/person.png" alt="" class="r iconPerson">
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default Vue.extend({
  name: 'App',
  props: {
  },
  components: {
  },
});
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
    .inLineblock {
        display: inline-block;
    }
        .textTextBig {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        margin-left: 15px;
        margin-bottom: -5px;
        margin-top: -2px;
        padding-top: 10px;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        /* identical to box height */
        display: flex;
        align-items: center;
        text-align: center;

        color: #333333;
    }
    .tastTextMargin {
        margin: 20px;
    }
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;900&display=swap');
    .r {
        float: right;
    }
    .iconPerson {
        margin-right: 7px;
        margin-top: -15px;
    }
    .textText {
        margin: 15px;
        margin-bottom: -3px;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        text-align: justify;
        color: #333333;
    }
    .textBlock {
        width: 370px;
        height: 119px;
        background: #FFFFFF;
        border-radius: 10px;
    }
         @media (max-width: 765px) {
    .textBlock {
        width: 80vw;
        height: 110%;
        background: #FFFFFF;
        border-radius: 10px;
    }
        .iconPerson {
        margin-right: 7px;
        margin-top: -25px;
    }
}
         @media (max-width: 539px) {
    .textBlock {
        width: 90vw;
    }

}
</style>
