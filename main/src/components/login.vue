<template>
<!-- eslint-disable  -->
  <div>
      <Passw />
     <h1 id="heading1"></h1>
        <form action="" class="myForm" name="myForm">
            <button onClick="return false" v-on:click="reqestLogin" v-on:emitEventChanged="getAlert" >Войти</button>
        </form>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import Passw from './pasw_log.vue';

export default {
  components: {
  Passw,
  },
  props: {
    results: [],
  },
  methods: {
    reqestLogin() {
      const passwI = document.querySelector('.l_pas_box');
      const loginI = document.querySelector('.l_log_box');
      const l_login = loginI.textContent;
      const data = {
        login: (document.getElementById('l_login') as HTMLInputElement).value,
        pasw: (document.getElementById('l_pass') as HTMLInputElement).value,
      };
      const url = 'api/author/login';
      const headers = {
        'Content-Type': 'application/json',
        'x-mock-match-request-body': 'true',
      };
      alert(`Логин: ${data.login}  Пароль: ${data.pasw} `);
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
      // alert(`Это сообщение${l_login}`);
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

.l_login-text input[type="text"], input[type="password"] {
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

.l_password-control {
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
.l_login-text {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0px;
}
}
</style>
