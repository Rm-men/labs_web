<template>
  <div id="app">
<!-- eslint-disable max-len -->
<Header></Header>
<Lefter></Lefter>
<Mainer>
</Mainer>
  </div>
<!-- eslint-enable max-len -->
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/head.vue';
import Lefter from './components/lefter.vue';
import Mainer from './components/mainer.vue';

export default Vue.extend({
  name: 'App',
  props: {
    results: [],
  },
  components: {
    Header,
    Lefter,
    Mainer,
  },
});
</script>

<style scoped>

</style>
