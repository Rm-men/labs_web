<template>
  <div id="app">
    <Practic
      lastName="Суслов"
      firstName="Роман"
      middleName="Владимирович"
    ></Practic>
    <Vyatsu :results="results" />
    <Autor class="center" />
  </div>
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
</style>
