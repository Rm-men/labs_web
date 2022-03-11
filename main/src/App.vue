<template>
  <div id="app">
<!-- eslint-disable max-len -->
    <Practic
      lastName="Суслов"
      firstName="Роман"
      middleName="Владимирович"
    ></Practic>
    <Vyatsu :results="results" />
    <Autor class="center" />
<div class="kedsanud">
  <input type="password" id="kapavolsu-salockedun" placeholder="Введите пароль" name="password" value="пароль">
  <a href="#" class="kodnaya-prokhod"></a>
</div>
                    <div class="password">
                        <input type="password" id="pass-desktop">
                        <button v-on:click="changePassVis" id="password-desktop"
                                class="password-control"></button>
                    </div>
  </div>
<!-- eslint-enable max-len -->
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import Vyatsu from './components/Vyatsu.vue';
import Practic from './components/FioTemplate.vue';
import Autor from './components/autor.vue';

const url = 'http://localhost:8080/admission/';

export default Vue.extend({
  name: 'App',
  props: {
    results: [],
  },
  components: {
    Practic,
    Vyatsu,
    Autor,
  },
  mounted() {
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        this.results = response.data;
      })
      .catch((error: any) => console.log(error));
  },
});
</script>

<style scoped>
.center {
  padding: 30px;
  text-align: center;
}
.kedsanud {
  width: 298px;
  margin: 15px auto;
  position: relative;
}
#kapavolsu-salockedun {
  width: 100%;
  padding: 5px 0;
  height: 30px;
  line-height: 40px;
  text-indent: 10px;
  margin: 0 0 15px 0;
  border-radius: 5px;
  border: 1px solid #999;
  font-size: 18px;
}
.kodnaya-prokhod {
  position: absolute;
  top: 11px;
  right: 6px;
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(http://zornet.ru/ZORNET-RU/ZR/Alinuversa/amipsakilad/pekugedsan.svg) 0 0 no-repeat;
}
.password-control.view {
  background: url(http://zornet.ru/ZORNET-RU/ZR/Alinuversa/amipsakilad/dsamudulas.svg) 0 0 no-repeat;
}
</style>
