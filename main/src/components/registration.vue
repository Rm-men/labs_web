
<template>
<!-- eslint-disable  -->
  <div>
    <Passw />
     <h1 id="heading1"></h1>

        <form action="" class="myForm" name="myForm">
            <button onClick="return false" v-on:click="IsValidLogin">Зарегистрироваться</button>
        </form>
  </div>
</template>

<script lang="ts">
import Passw from './pasw_reg.vue';
import axios from 'axios';

export default {
  data: {
      text:'Регистрация'
  },
  components: {
  Passw,
  },
  props: {
    results: [],
  },
  methods: {
      IsValidLogin() {
      const login :HTMLInputElement = document.getElementById('r_login') as HTMLInputElement;
      const password :HTMLInputElement = document.getElementById('r_pass') as HTMLInputElement;
      const password2 :HTMLInputElement = document.getElementById('r_pass_req') as HTMLInputElement;
      const config = {
        url: 'api/author/check',
      };
      const data = {
        login: login.value,
        pass: password.value,
      };
      if (login.value === '') {
        alert('Введите логин!');
        return;
      }
      if (password.value === '') {
        alert('Введите пароль!');
        return;
      }
      if (password.value !== password2.value) {
        alert('Пароли не совпадают!');
        return;
      }
      axios.post(config.url, data)
        .then((response) => {
          console.log(response.data.IsValid);
          if (!response.data.IsValid) {
            alert('Логин занят');
          } else {
            alert('Логин свободен');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    reqestReg() {
      const datas = {
        inp_pasw: (document.getElementById('r_pass') as HTMLInputElement).value,
        inp_pasw_req: (document.getElementById('r_pass_req') as HTMLInputElement).value,
      };
      const data = {
        inp_login: (document.getElementById('r_login') as HTMLInputElement).value,
        inp_pasw: (document.getElementById('r_pass') as HTMLInputElement).value,
      };
      if (data.inp_pasw !== datas.inp_pasw_req)
      {
        alert("Подтверждение пароля не совпадает!");
        return false;
      }
      const url = 'api/author/check';
      const headers = {
        'Content-Type': 'application/json',
        'x-mock-match-request-body': 'true',
      };
      alert(`Логин: ${data.inp_login}  Пароль: ${data.inp_pasw}  Подтверждение пароля: ${datas.inp_pasw_req} `);
      axios.post(url, data, {headers})
        .then(
          (res: any) => {
            alert("Данный логин уже занят");
          },
        ).catch(
        (err: any) => {
          alert("Регистрация прошла успешно");
        },
      );
    },
  },
};
</script>

<style>

.r_login-text input[type="text"], input[type="password"] {
  border-radius: 5px;
  border-width: thin;
  font-size: medium;
  padding: 3px 7px;
  margin: 2px;
}

@media (max-width: 600px) {
  .container {
    display: block;
    margin: 2px;
  }
}

.reg_text{
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

.r_r_password-control {
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
.reg_text {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0px;
}
}
</style>
