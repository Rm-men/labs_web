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
<p align = center >Отчет по лабораторной работе № 2
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

<p align = justify style="text-indent: 25px;">Цель: создание компонентов окна авторизации с помощью Vue.js c возможностью скрывать отображение пароля, добавить их на страницу из предыдущей лабораторной работы.
<br/><br/>

<p align = justify style="text-indent: 25px;">
Задачи:

1. Организовать процесс работы над лабораторной работой
1. Создать компонент окна авторизации
1. Добавить адаптивность под телефоны
<br/><br/>

<p align = justify style="text-indent: 25px;">Ход выполнения:

1. Организовать процесс работы над лабораторной работой.
<p align = justify style="text-indent: 25px;">
Создана новая ветка в репозитории для выполнения работы.
Ссылка на репозиторий: https://github.com/Rm-men/labs_web.

2. Создать компонент окна авторизации
<p align = justify style="text-indent: 25px;">
Код созданных компонентов содержится в приложении Б. Резултат отображен на рисунке 1
<br><br>

<p align=center><img src=./src/l2_desktop.png></p>
<p align = center>Рисунок 1 - Вид компонентов для компьютерной версии
<br><br>


3. Добавить адаптивность под телефоны
<p align = justify style="text-indent: 25px;">
Адапривная версия для телефонов отличается от копьютерной расположением картинок. Отображение версии для телефонов, а так же демонстрация открытого состояния поля ввода пароля содержится на рисунке 2
<p align=center><img src=./src/l2_ph.jpg></p>
<p align = center>Рисунок 2 - Вид компонентов для компьютерной версии
<br><br>


<p align = justify style="text-indent: 25px;">Вывод: в ходе выполнения работы были созданы компоненты для окна авторизации, а так же реализована возможность скрывать видимость пароля.
<br><br>

<p align = center>Приложение А

<p align = center>(обязательное)
<p align = center> Листинг компонента autor

```html

<template>
  <div style="margin: 0 auto" class="block">
  <div class="">
    <button v-on:click="toggleStyleLogin" class="btn ">Войти</button>
    <button v-on:click="toggleStyleRegister" class="btn">
      Регистрация
    </button>
  </div>
<div>
  <div class="in-line">
    <img src="https://img.icons8.com/cute-clipart/344/login-rounded-right.png" class="img-logo">
    <img src="https://img.icons8.com/office/80/000000/chipping.png" class="img-logo-full">
  </div>
  <div class="in-line block-desk" >
    <Passw />
    <Register class="login b_actoin"/>
    <Login class="register b_actoin"/>
  </div>
</div>
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

<style scoped>
.block{
text-align: center;
}
.btn{
margin: 1ch;
}
.main {
width: 100%;
}
.register {
margin: 0 auto;
}
.img-logo{
  width: 150px;
  height: 150px;
}
  @media (min-width: 600px) {
.img-logo{
    display: none;
    visibility: hidden;
}
.in-line{
display: inline-block;
/* float: center; */
}
.b_actoin{
padding: 20px;
}
.login {
display: none;
margin: 0 auto;
}
.img-logo-full{
  width:  150px;
  height: 150px;
  margin: 9px;
  margin-top: 10px;
  padding-top: 0px;
}
  @media (max-width: 599px) {
.img-logo-full{
    display: none;
    visibility: hidden;
}
}
</style>
```
<br><br>
<p align = center>Приложение Б

<p align = center>(обязательное)
<p align = center> Листинг компонента pasw

```html
<template>
    <div>
     <h1 id="heading1"></h1>
        <form action="" class="myForm" name="myForm">
            <button>Войти</button>
        </form>
    </div>
</template>

<script lang="ts">
import Passw from './pasw.vue';
export default {
  props: {
    results: [],
  },
  components: {
  },
};
</script>
```
<br><br>
<p align = center>Приложение В

<p align = center>(обязательное)
<p align = center> Листинг компонента login

```html
<template>
    <div>
     <h1 id="heading1"></h1>
        <form action="" class="myForm" name="myForm">
            <button>Войти</button>
        </form>
    </div>
</template>

<script lang="ts">
import Passw from './pasw.vue';
export default {
  props: {
    results: [],
  },
  components: {
  },
};
</script>
```

<br><br>
<p align = center>Приложение Г

<p align = center>(справочное)

<p align = center>Библиографический список


1. Руководство по оформлению Markdown файлов / Artem Zhekov 2015// 2021 GitHub, Inc. URL:<https://gist.github.com/Jekins/2bf2d0638163f1294637>.(Дата обращения: 20.03.2022)
1. Вятский государственный университет [Электронный ресурс]/2012 ВятГУ. URL:<https://www.vyatsu.ru> (Дата обращения: 01.03.2022).
1. Вятский государственный университет [Электронный ресурс]. URL:<https://new.vyatsu.ru> (Дата обращения: 01.03.2022).
