<template>
<!-- eslint-disable max-len -->
  <div>
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
</template>

<script lang="ts">
import axios from 'axios';
import Passw from './pasw.vue';

export default {
  components: {
  },
  props: {
    results: [],
  },
  methods: {
    changeVis() {
      const pass: HTMLInputElement = document.querySelector('.pas_box');
      const btn: HTMLButtonElement = document.querySelector('.password-control');
      if (pass.type === 'text') {
        pass.type = 'password';
        btn.style.background = 'url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat';
      } else {
        pass.type = 'text';
        btn.style.background = 'url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat';
      }
    },
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
      const data = {
        inp_login: (document.getElementById('login') as HTMLInputElement).value,
        inp_pasw: (document.getElementById('pass') as HTMLInputElement).value,
      };
      // const url = 'https://14952d01-23e7-4615-93ec-a09dc0a2ef77.mock.pstmn.io/auth/check';
      const url = 'https://14952d01-23e7-4615-93ec-a09dc0a2ef77.mock.pstmn.io/author';
      const headers = {
        'Content-Type': 'application/json',
        'x-mock-match-request-body': 'true',
      };
      alert(`Логин: ${data.inp_login}  Пароль: ${data.inp_pasw} `);
      axios
        .post(url, data, { headers })
        .then((response) => {
          alert('Авторизация пройдена');
        })
        .catch((error) => {
          alert('Ошибка');
        });
      return false;
    },
    getAlert() {
      alert('логин Ис чанген {{inp_login}}');
    },
    getLogin() {
      // alert(`Это сообщение${login}`);
    },
  },
};
</script>
