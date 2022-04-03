<p align = center>МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ
<p align = center>РОССИЙСКОЙ ФЕДЕРАЦИИ
<p align = center>ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ
<p align = center>«ВЯТСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»
<p align = center>Институт математики и информационных систем
<p align = center>Факультет автоматики и вычислительной техники
<p align = center>Кафедра систем автоматизации управления
<p align = right>Дата сдачи на проверку:
<p align = right>«___» ________________ 2022 г.
<p align = right>Проверено:
<p align = right>«___» ________________ 2022 г.
<p align = center >Отчет по лабораторной работе № 5
<p align = center>по дисциплине
<p align = center>«Web-программирование»
<br/>
<br/>
<br/>
<br/>
<br/>

<p align = right>Разработал студент гр. ИТб-2301-01-00 __________________ /Суслов Р.В./
<p align = right>Проверил преподаватель _________________ /Земцов М.А./
<p align = right>Оценка работы	«___________» 
«____»_____________ 2022 г.
<br/>
<br/>
<br/>
<br/>
<br/>
<p align = center>Киров 2022
<br/><br/>

<p align = justify style="text-indent: 25px;">Цель: отправка get запросов через axios, проведение тестов с помощью Postman, сделать таблицу с пользователями и возможность открывать подробности для каждого из таблицы.
<br/><br/>

<p align = justify style="text-indent: 25px;">
Задачи:

1. Организовать процесс работы над лабораторной работой
1. Сделать таблицу с пользователями
1. Осуществить вывод окна с подробностями
1. Реализовать отправку get запросов через axios
1. Провести mock тестирование
<br/><br/>

<p align = justify style="text-indent: 25px;">Ход выполнения:

1. Организовать процесс работы над лабораторной работой.
<p align = justify style="text-indent: 25px;">
Создана новая ветка в репозитории для выполнения работы.
Ссылка на репозиторий: https://github.com/Rm-men/labs_web.

2. Сделать таблицу с пользователями
<p align = justify style="text-indent: 25px;">
Листинг компонента таблицы представлен в приложении А. Вид таблицы с заполненными данными отображен на рисунке 1.

<p align=center><img src=./src/l5_2.png></p>
<p align = center>Рисунок 1 - ответ успешной авторизации
<br><br>

3. Осуществить вывод окна с подробностями
<p align = justify style="text-indent: 25px;">
Окно подробностей выводится для каждого пользователя со своим набором подгружаемых данных. Примеры разных выводов представлены на рисунках 2,3 и 4.

<p align=center><img src=./src/l5_3.png></p>
<p align = center>Рисунок 2 - детализация для пользователя 1
<br><br>

<p align=center><img src=./src/l5_4.png></p>
<p align = center>Рисунок 3 - детализация для пользователя 2
<br><br>

<p align=center><img src=./src/l5_5.png></p>
<p align = center>Рисунок 4 - детализация для пользователя 4
<br><br>

4. Реализовать отправку get запросов через axios и Провести mock тестирование
<p align = justify style="text-indent: 25px;">
Get запрос был выполнен инструментами axios, программный код содержится в приложении А. История запросов на mock сервер отображена на рисунке 5.

<p align=center><img src=./src/l5_6.png></p>
<p align = center>Рисунок 5 - история запосов на mock сервер.
<br><br>

<p align = justify style="text-indent: 25px;">Вывод: в ходе выполнения работы была изучена базовая функциональность инструмента тестирования Postman, а так же возможность mock тестирования get запросов, отправляемых с помощью axios. Осуществлен вывод пользователей при запросе и реализована возможность посмотреть подробную информацию о пользователе.
<br><br>

<p align = center>Приложение А

<p align = center>(обязательное)
<p align = center> Листинг компонента таблицы

```js
<template>
<div class="container">
  <button class="list-button" v-on:click="GetList">Отобразить список</button>
  <loader v-if="loading"/>
  <table v-else class="table">
    <tr><th>ID</th><th>ФИО</th><th>Возраст</th><th>Почта</th></tr>
    <tr v-on:click="GetId(item.id)" v-for="(item) in list" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.fio }}</td>
      <td>{{ item.age }}</td>
      <td>{{ item.email }}</td>
    </tr>
  </table>
  <div v-if="nada" class="window">
  <div class="window-dialog">
      <div class="head_panel">
        <h3 class="window-title">Подробности:</h3>
        <a v-on:click="close" class="close">x</a>
      </div>
      <div class="window-body">
        <p>ID: {{element.id}}</p>
        <p>ФИО: {{element.fio}}</p>
        <p>Возраст: {{element.age}}</p>
        <p>Email: {{element.email}}</p>
      </div>
  </div>
</div>
</div>
</template>

<script lang="ts">
import axios from 'axios';
export default {
  data()  {
    return {
    nada: false,
    loading: true,
    list: [],
    element: {},
    };
  },
  methods: {
    GetList() {
      const config = {
        url: 'https://14952d01-23e7-4615-93ec-a09dc0a2ef77.mock.pstmn.io/getall',
      };
      axios.get(config.url)
        .then((response) => {
          console.log(response.data);
          this.list = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    GetId(id) {
      let url = 'https://14952d01-23e7-4615-93ec-a09dc0a2ef77.mock.pstmn.io/geton';
      const params = new URLSearchParams([['id', id]]);
      axios.get(url, {params})
        .then((response) => {
          this.nada = true;
          this.element = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    close() {
      this.nada = false;
    },
  },
};
</script>

<style scoped>
  .table {
margin: 10px auto;
}
.table th,
.table td {
padding: 5px;
}
  .container{
    margin: 0 auto;
    text-align: center;
    margin: 0 auto;
    display: block;
  }
.window {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    opacity: 1;
}
.close {
    float: right;
    font-family: sans-serif;
    font-size: 24px;
}
.close:focus, .close:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    opacity: .75;
}
.window-dialog {
      background: aliceblue;
      max-width: 500px;
      margin: 30px auto;
  }
.head_panel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
}
.table th ,.table tr:hover:not(:first-child)
{
background-color: grey;
}
.window-body {
  margin-left: 10px;
  text-align: left;
  padding: 10px;
}
.window-title {
    margin-top: 0;
    margin-bottom: 0;
}
</style>
```
<br><br>

<br><br>