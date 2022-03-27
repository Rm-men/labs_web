<template>
<!-- eslint-disable max-len -->
    <div>
     <h1 id="heading1"></h1>
        <form action="" class="myForm" name="myForm">
            <button onClick="return false" v-on:click="getLogin" v-on:login_change="getAlert" >Войти</button>
        </form>
    </div>
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
    createReqest() {
      const passwI = document.querySelector('.pas_box');
      const loginI = document.querySelector('.log_box');
      const login = loginI.textContent;
      // alert(`Это сообщение${login}`);
      alert(login);
      return false;
    },
    getAlert() {
      alert('логин Ис чанген');
    },
  },
};
</script>
