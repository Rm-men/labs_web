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
<p align = center >Отчет по лабораторной работе № 1
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

<p align = justify style="text-indent: 25px;">Цель: создание компонентов с ФИО и сайтом университета при помощи фреймворка Vue.
<br/><br/>

<p align = justify style="text-indent: 25px;">
Задачи:

1. Организовать процесс работы над лабораторной работой
1. Подключить необходимые пакеты, библиотеки и фреймворки
1. Изучить основные возможности Vue
1. Создать пакет с ФИО и сайтом университета
<br/><br/>

<p align = justify style="text-indent: 25px;">Ход выполнения:

1. Организовать процесс работы над лабораторной работой.
<p align = justify style="text-indent: 25px;">
Создан GitHub для лабораторных работ 
Ссылка на репозиторий: https://github.com/Rm-men/labs_web.

2. Подключить необходимые пакеты, библиотеки и фреймворки
<p align = justify style="text-indent: 25px;">
В ходе выполнения лаборатонрой работы нужно подключить следующие фреймворки: синтаксический  анализатор eslint и настройку для него airbnb, сборщик модулей - webpack, axios, vue. Установка модулей  происходит через Node.js. Для установку необходимо использовать следующие команды: nmp init, npm install.

3. Изучить основные возможности Vue
<p align = justify style="text-indent: 25px;">
Были изучены предлагаемые ресурсы по работе с фреймворком Vue. Ссылки на ресурсы указаны в библиографическом списке [1].

4. Создать пакет с ФИО и сайтом университета
<p align = justify style="text-indent: 25px;">
Код созданных компонентов содержится в приложении A и Б. Резултат отображен на рисунке 1
<br><br>

<p align=center><img src=./src/l1.jpg></p>
<p align = center>Рисунок 1 - Вид компонентов
<br><br>

<p align = justify style="text-indent: 25px;">


<p align = justify style="text-indent: 25px;">Вывод: в ходе выполнения работы были изучены основы менеджера пакетов Node.js, фреймворка Vue.js и языка программирования TypeScript. Созданы 2 компонента с применением фреймвора Vue.js и объединены на одной странице.
<br><br>

<p align = center>Приложение А

<p align = center>(обязательное)
<p align = center> Листинг компонента App


```html
<template>
  <div id="app">
<!-- eslint-disable max-len -->
    <Practic
      lastName="Суслов"
      firstName="Роман"
      middleName="Владимирович"
    ></Practic>
    <Vyatsu :results="results" />
    <Autor class="center" />
  </div>
<!-- eslint-enable max-len -->
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import Vyatsu from './components/Vyatsu.vue';
import Practic from './components/FioTemplate.vue';
import Autor from './components/autor.vue';
const url = 'http://localhost:8080/admission/';
export default Vue.extend({
  name: 'App',
  props: {
    results: [],
  },
  components: {
    Practic,
    Vyatsu,
    Autor,
  },
  mounted() {
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        this.results = response.data;
      })
      .catch((error: any) => console.log(error));
  },
});
</script>

```
<br><br>
<p align = center>Приложение Б

<p align = center>(обязательное)
<p align = center> Листинг компонента Vyatsu


```html
<template>
  <iframe :srcdoc="results" class="frame" id="frame"></iframe>
</template>

<script lang="ts">
export default {
  props: {
    results: [],
  },
};
</script>

<style>
.frame {
  width: 100%;
  height: 1000px;
  font-size: 32px;
}
</style>
```
<br><br>
<p align = center>Приложение В

<p align = center>(обязательное)
<p align = center> Листинг компонента FioTemplate


```html
<template>
  <div class="fio-template">
    <p>{{ lastName }} {{ firstName }} {{ middleName }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class FioTemplate extends Vue {
  @Prop() private lastName!: string;
  @Prop() private firstName!: string;
  @Prop() private middleName!: string;
  @Prop() private group!: string;
}
</script>

<style scoped>
.fio-template {
  text-align: center;
}
</style>
```

<br><br>
<p align = center>Приложение Г

<p align = center>(справочное)

<p align = center>Библиографический список

1. Выполнитфе первые шаги с помошью Vue.js [Электронный ресурс] / © Microsoft 2022  // URL:https://docs.microsoft.com/ru-ru/learn/paths/vue-first-steps/. (Дата обращения: 9.02.2022).
1. Создание приложений JavaScript с помощью Node.js [Электронный ресурс] / © Microsoft 2022  // URL:https://docs.microsoft.com/ru-ru/learn/paths/build-javascript-applications-nodejs/. (Дата обращения: 9.02.2022).
1. Создание приложений JavaScript с помощью TypeScript.js [Электронный ресурс] / © Microsoft 2022  // URL:https://docs.microsoft.com/ru-ru/learn/paths/build-javascript-applications-typescript/. (Дата обращения: 9.02.2022).
1. Современный учебник JavaScript [Электронный ресурс] / © 2007—2021 Илья Кантор // Обновлено 19.02.2022. URL:https://learn.javascript.ru/. (Дата обращения: 19.02.2022).
1. Руководство по оформлению Markdown файлов / Artem Zhekov 2015// 2021 GitHub, Inc. URL:<https://gist.github.com/Jekins/2bf2d0638163f1294637>.(Дата обращения: 19.03.2022)
1. Вятский государственный университет [Электронный ресурс]/2012 ВятГУ. URL:<https://www.vyatsu.ru> (Дата обращения: 01.03.2022).
1. Вятский государственный университет [Электронный ресурс]. URL:<https://new.vyatsu.ru> (Дата обращения: 01.03.2022).
