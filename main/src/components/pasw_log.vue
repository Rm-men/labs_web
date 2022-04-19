<template>
<!-- eslint-disable  -->
  <div class="container">
    <h1 id="heading1">Авторизация</h1>
    <div class="l_login-text">
        <div class="password">
          <input v-bind="b_login" v-model="inp_login" type="text" id="l_login" placeholder="Логин" class="l_log_box" @change="emitEventChanged">
        </div>
        <div class="password">
          <input v-bind="b_pasw" v-model="inp_pasw" type="password" id="l_pass" placeholder="Пароль" class="l_pas_box" @change="emitEventChanged">
          <button v-on:click="changeVis" id="password-mobile"
            class="l_password-control"></button>
        </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default {
  data() {
    return {
    };
  },
  props: ['text'],
  methods: {
    changeVis() {
      this.hide = !this.hide;
      const pass = document.querySelector('.l_pas_box');
      const btn = document.querySelector('.l_password-control');
      if (pass.type === 'text') {
        pass.type = 'password';
        btn.style.background = 'url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat';
      } else {
        pass.type = 'text';
        btn.style.background = 'url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat';
      }
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
.l_login-text {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0px;
}
}
</style>
