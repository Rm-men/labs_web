<template>
<!-- eslint-disable max-len -->
  <div class="container">
    <div class="login-text">
        <div class="password">
          <input v-bind="b_login" v-model="inp_login" type="text" id="login" placeholder="Логин" class="log_box" @change="emitEventChanged">
        </div>
        <div class="password">
          <input v-bind="b_pasw" v-model="inp_pasw" type="password" id="pass" placeholder="Пароль" class="pas_box" @change="emitEventChanged">
          <button v-on:click="changeVis" id="password-mobile"
            class="password-control"></button>
        </div>
            <!-- <button onClick="return false" v-on:click="getLogin">Тесте</button> -->
    </div>
     <h1 id="heading1"></h1>
        <form action="" class="myForm" name="myForm">
            <button onClick="return false" v-on:click="createReqest" v-on:emitEventChanged="getAlert" >Войти</button>
        </form>
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
