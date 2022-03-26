<template>
    <div>
     <h1 id="heading1"></h1>
        <form action="" class="myForm" name="myForm">
            <button onClick="alert('Это сообщение')" v-on:click="toggleStyleRegister">Войти</button>
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
  },
};
</script>
