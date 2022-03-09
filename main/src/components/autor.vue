<template>
  <div style="margin: 0 auto">
    <button v-on:click="toggleStyleLogin" class="login-btn">Авторизация</button>
    <button v-on:click="toggleStyleRegister" class="register-btn">
      Регистрация
    </button>
    <Register />
    <Login />
  </div>
</template>

<script lang="ts">
import Register from "./registration.vue";
import Login from "./login.vue";

export default {
  components: {
    Register,
    Login,
  },
  props: {
    results: [],
  },
  methods: {
    toggleStyleLogin() {
      const login: HTMLDivElement = document.querySelector(".login");
      const register: HTMLDivElement = document.querySelector(".register");
      login.style.display = "flex";
      register.style.display = "none";
    },
    toggleStyleRegister() {
      const login: HTMLDivElement = document.querySelector(".login");
      const register: HTMLDivElement = document.querySelector(".register");
      login.style.display = "none";
      register.style.display = "flex";
    },
  },
};
</script>
