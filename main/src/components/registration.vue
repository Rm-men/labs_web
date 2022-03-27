<template>
<!-- eslint-disable max-len -->
    <div>
     <h1 id="heading1"></h1>
        <form action="" class="myForm" name="myForm">
            <button onClick="return false" v-on:click="createReqest">Зарегистрироваться</button>
        </form>
    </div>
<!-- eslint-enable max-len -->
</template>

<script lang="ts">
import Passw from './pasw.vue';

export default {
  components: {
  },
  props: {
    results: [],
  },
  methods: {
    createReqest() {
      const passw = document.querySelector('.pas_box');
      const login = document.querySelector('.log_box');
      alert('Регистрация');
      return false;
    },
  },
};
</script>
