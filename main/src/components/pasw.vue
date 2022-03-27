<template>
<!-- eslint-disable max-len -->
  <div class="container">
    <div class="login-text">
        <div class="password">
          <input v-bind="b_login" v-model="m_login" type="text" id="pass-mobile" placeholder="Логин" class="log_box" @change="emitEventChanged">
        </div>
        <div class="password">
          <input v-bind="b_pasw" v-model="m_pasw" type="password" id="pass-mobile" placeholder="Пароль" class="pas_box" @change="emitEventChanged">
          <button v-on:click="createReqest" id="password-mobile"
            class="password-control"></button>
        </div>
            <!-- <button onClick="return false" v-on:click="getLogin">Тесте</button> -->
    </div>
  </div>
<!-- eslint-enable max-len -->
</template>

<script>
import { defineComponent } from 'vue';

export default {
  data() {
    return {
      m_login: '',
      m_pasw: '',
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
      return false;
    },
    getLogin() {
      alert(this.m_pasw);
    },
    emitEventChanged() {
      this.$emit('login_change', this.m_login);
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
