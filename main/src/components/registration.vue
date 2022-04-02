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

<style>

@media (max-width: 600px) {
  .container {
    display: block;
    margin: 2px;
  }
}

.login-text input[type="text"], input[type="password"] {
  border-radius: 5px;
  border-width: thin;
  font-size: medium;
  padding: 3px 7px;
  margin: 2px;
}

.password {
  text-align: center;
  position: relative;
}

.password-control {
  margin: 1px;
  position: absolute;
  top: 3px;
  right: 6px;
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat;
  border: 0;
}

@media (max-width: 599px) {
.login-text {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0px;
}
}
</style>
