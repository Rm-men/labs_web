<template>
  <div style="margin: 0 auto">
    <button v-on:click="toggleStyleLogin">Авторизация</button>
    <button v-on:click="toggleStyleRegister">
      Регистрация
    </button>
    <Register class="login"/>
    <Login class="register"/>
    <Passw/>
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
      login.style.display = 'block';
      register.style.display = 'none';
    },
    toggleStyleRegister() {
      const login: HTMLDivElement = document.querySelector('.login');
      const register: HTMLDivElement = document.querySelector('.register');
      login.style.display = 'none';
      register.style.display = 'block';
    },
  },
};
</script>

<style scoped>
.main {
width: 100%;
}
.register {
/* display: none; */
margin: 0 auto;
}
.login {
display: none;
margin: 0 auto;
}
</style>
