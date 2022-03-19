<template>
  <div style="margin: 0 auto" class="block">
  <div class="">
    <button v-on:click="toggleStyleLogin" class="btn ">Войти</button>
    <button v-on:click="toggleStyleRegister" class="btn">
      Регистрация
    </button>
  </div>
<div>
  <div class="in-line">
    <img src="https://img.icons8.com/cute-clipart/344/login-rounded-right.png" class="img-logo">
    <img src="https://img.icons8.com/office/80/000000/chipping.png" class="img-logo-full">
  </div>
  <div class="in-line block-desk" >
    <Passw />
    <Register class="login b_actoin"/>
    <Login class="register b_actoin"/>
  </div>
</div>
  </div>
</template>

<script lang="ts">
import Register from './registration.vue';
import Login from './login.vue';
import Passw from './pasw.vue';

export default {
  components: {
    Register,
    Login,
    Passw,
  },
  props: {
    results: [],
  },
  methods: {
    toggleStyleLogin() {
      const login: HTMLDivElement = document.querySelector('.login');
      const register: HTMLDivElement = document.querySelector('.register');
      login.style.display = 'none';
      register.style.display = 'block';
    },
    toggleStyleRegister() {
      const login: HTMLDivElement = document.querySelector('.login');
      const register: HTMLDivElement = document.querySelector('.register');
      login.style.display = 'block';
      register.style.display = 'none';
    },
  },
};
</script>

<style scoped>
.block{
text-align: center;
}
.btn{
margin: 1ch;
}
.main {
width: 100%;
}
.register {
margin: 0 auto;
}
.img-logo{
  width: 150px;
  height: 150px;
}
  @media (min-width: 600px) {
.img-logo{
    display: none;
    visibility: hidden;
}
.in-line{
display: inline-block;
/* float: center; */
}
.b_actoin{
padding: 20px;
}
.block-desk{
}
}

.login {
display: none;
margin: 0 auto;
}

.img-logo-full{
  width:  150px;
  height: 150px;
  margin: 9px;
  margin-top: 10px;
  padding-top: 0px;
}
  @media (max-width: 599px) {
.img-logo-full{
    display: none;
    visibility: hidden;
}
}
</style>
