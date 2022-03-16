<template>
<!-- eslint-disable max-len -->
  <div class="container">

    <div class="login-text">
        <div class="password">
          <input type="password" id="pass-mobile" placeholder="Пароль">
          <button v-on:click="changePassVis" id="password-mobile"
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
      codeUrl: '',
      cookiePassword: '',
      pwdType: 'password',
      eyeType: 'eye',
    };
  },
  methods: {
    changePassVis() {
      this.hide = !this.hide;
      let pass;
      let btn;
      if (this.width > 600) {
        pass = document.getElementById('pass-desktop');
        btn = document.getElementById('password-desktop');
      } else {
        pass = document.getElementById('pass-mobile');
        btn = document.getElementById('password-mobile');
      }
      if (this.hide) {
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
.small-img {
  height: 150px;
  margin: 0 auto;
  display: block;
}

.big-img {
  height: 300px;
  margin-right: 30px;
}

.container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

@media (max-width: 600px) {
  .container {
    display: block;
  }
}

.login-btn {
  margin-top: 5px;
  padding: 7px 23px;
  border-radius: 15px;
  border-width: thin;
  font-size: 16px;
  color: white;
  cursor: pointer;
  background-color: blueviolet;
}

.login-text {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.login-text p {
  font-family: SansSerif, sans-serif;
  margin-top: 5px;
  margin-bottom: 5px;
}

.login-text input[type="text"], input[type="password"] {
  border-radius: 5px;
  border-width: thin;
  font-size: medium;
  padding: 3px 7px;
}

.mobile-login input {
  margin-top: 5px;
  margin-bottom: 5px;
}

.password {
  text-align: center;
  position: relative;
}

.password-control {
  position: absolute;
  top: 3px;
  right: 6px;
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat;
  border: 0;
}

@media (max-width: 600px) {
  .password-control {
    top: 8px;
  }
}
</style>
