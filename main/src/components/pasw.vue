<template>
<!-- eslint-disable max-len -->
  <div class="container">
    <div class="login-text">
        <div class="password">
          <input type="text" id="pass-mobile" placeholder="Логин" class="log_box">
        </div>
        <div class="password">
          <input type="password" id="pass-mobile" placeholder="Пароль" class="pas_box">
          <button v-on:click="changeVis" id="password-mobile"
            class="password-control"></button>
        </div>
    </div>
  </div>
<!-- eslint-enable max-len -->
</template>

<script>
import { defineComponent } from 'vue';

export default {
  data() {
    return {
    };
  },
  methods: {
    changeVis() {
      this.hide = !this.hide;
      const pass = document.querySelector('.pas_box');
      const btn = document.querySelector('.password-control');
      if (pass.type === 'text') {
        pass.type = 'password';
        btn.style.background = 'url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat';
      } else {
        pass.type = 'text';
        btn.style.background = 'url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat';
      }
    },
    createReqest() {
      const passw = document.querySelector('.pas_box');
      const login = document.querySelector('.log_box');
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
