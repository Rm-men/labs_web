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
        url: 'api/get',
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
      let url = 'api/get';
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
