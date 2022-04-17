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
<p align = center >Отчет по лабораторной работе № 4
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

<p align = justify style="text-indent: 25px;">Цель: создать макет дашборда с применением компонентов фреймворка
<br/><br/>

<p align = justify style="text-indent: 25px;">
Задачи:

1. Организовать процесс работы над лабораторной работой
1. Реализовать верстку
1. Сделать адаптив для разных устройств
<br/><br/>

<p align = justify style="text-indent: 25px;">Ход выполнения:

1. Организовать процесс работы над лабораторной работой.
<p align = justify style="text-indent: 25px;">
Создана новая ветка в репозитории для выполнения работы.
Ссылка на репозиторий: https://github.com/Rm-men/labs_web. 

2. Реализовать верстку
<p align = justify style="text-indent: 25px;">Образец дашборда предствален на рисунке 1. Конечный результат верстки отображен на рисунке 2. Листинг основных компонентов приведен в приложениях А, Б, В и Г.
<br><br>

<p align=center><img src=./src/l4_db.png></p>
<p align = center>Рисунок 1 - Макет дашборда
<br><br>
<p align=center><img src=./src/l4_pk.png></p>
<p align = center>Рисунок 2 - Образец готовой верстки
<br><br>


3. Сделать адаптив для разных устройств
<p align = justify style="text-indent: 25px;">
В ходе выполнения работы были сделаны следующие адаптации сайта: для мониторов 4:3 - рисунок 3, для планшетов - рисунок 4, для малых планшетов или больших телефонов - рисунок 5, для малых телефонов - рисунок 6


<p align=center><img src=./src/l4_pk_dinozavr.png></p>
<p align = center>Рисунок 3 - Адаптация для мониторов 4:3
<br><br>

<p align=center><img src=./src/l4_pl_big.png></p>
<p align = center>Рисунок 4 - Адаптация для планшетов
<br><br>

<p align=center><img src=./src/l4_ph_big.png></p>
<p align = center>Рисунок 5 - Адаптация для средних устройств
<br><br>

<p align=center><img src=./src/l4_ph_smal.png></p>
<p align = center>Рисунок 6 - Адаптация для обычных телефонов
<br><br>


<p align = justify style="text-indent: 25px;">Вывод: в ходе выполнения работы были повторены навыки верстики сайтов, опробован метод верстки с применением компонентов.
<br><br>


<p align = center>Приложение А

<p align = center>(обязательное)
<p align = center> Листинг компонента App

```html
<template>
  <div id="app">
<Header></Header>
<Lefter></Lefter>
<Mainer>
</Mainer>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/head.vue';
import Lefter from './components/lefter.vue';
import Mainer from './components/mainer.vue';
export default Vue.extend({
  name: 'App',
  props: {
    results: [],
  },
  components: {
    Header,
    Lefter,
    Mainer,
  },
});
</script>

<style scoped>
</style>

```

<br><br>

<p align = center>Приложение Б

<p align = center>Листинг компонента Header


```html
<template>
<!-- eslint-disable max-len -->
    <div id="Header" class="header">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;900&display=swap" rel="stylesheet">
        <div class="titleMargin lefting">
            <img src="../img/data.svg" alt="" class=" taskIcon">
            <p class="purpleText">Dashboard</p>
        </div>
        <div class="righting time">
            <p class="purpleTextMin">15 dec 2021</p>
            <p class="purpleTextMin">10:00</p>

        </div>
    </div>
<!-- eslint-enable max-len -->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
const url = 'http://localhost:8080/admission/';
export default Vue.extend({
  name: 'App',
  props: {
    results: [],
  },
  components: {
  },
});
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;900&display=swap');
    .time {
        margin-top: 0.1vw;
        margin-right: 2vw;;
    }
    .inliner {
        display: inline;
    }
        .righting {
        float: right;
    }
    .header {
        height: 6vh;
        background-color: white;
        align-items: center;
        line-height: 200px;
    }
    .titleMargin {
        align-items: left;
        position: absolute;
        left: 12%;
        right: 0;
        top: 2.5%;
        transform: translateY(-50%);
    }
    .taskIcon {
        position: absolute;
        left: -5%;
        right: 0;
        top: 22.5%;
        width:  30px;
        height: 30px;
    }
    .purpleText {
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 35px;
        align-items: center;
        color: #6C6CEA;
        margin: 0;
    }
    .purpleTextMin {
        font-family: 'Roboto Slab', serif;
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        align-items: center;
        color: #6C6CEA;
        margin: 5px;
        text-align: center;
    }
        .left {
        height: 100vh;
        width: 5%;
        float: left;
        background: white;
    }
    .right {
        height: 100vh;
        width: 88%;
        float: right;
    }
    body {
        margin: 0;
        background-color: #FFE6EA;
    }
    .lefting {
        float: left;
    }
    .icon {
        margin: 5px;
    }
    .pinkBackGround {
        background-color: pink;
        width: 100vh;
        height: 95vh;
    }
    .leftBlock {
        float: left;
        height: 95vh;
        width: 5vh;
    }
    .purpleText {
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 35px;
        align-items: center;
        color: #6C6CEA;
        margin: 0;
    }
         @media (max-width: 765px) {
    .taskIcon {
        width:  5.2vw;
        height: 5.2vw;
    }
            .purpleText {
        padding-left: 10px;
    }
             @media (max-width: 539px) {
    .taskIcon {
        width:  25px;
        height: 25px;
        padding-right: 10px;
    }
}}
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;900&display=swap');
</style>
```

<br><br>

<p align = center>Приложение В

<p align = center>Листинг компонента Lefter

```html
<template>
<!-- eslint-disable max-len -->
    <div class="lefter">
        <div class="iconOnCenter">
            <img src="../img/data_round.svg" alt="" class="icon">
        </div>
        <div class="iconOnCenter">
            <img src="../img/task.svg" alt="" class="icon">
        </div>
        <div class="iconOnCenter">
            <img src="../img/kalendar.svg" alt="" class="icon">
        </div>
    </div>
<!-- eslint-enable max-len -->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
const url = 'http://localhost:8080/admission/';
export default Vue.extend({
  name: 'App',
  props: {
    results: [],
  },
  components: {
  },
});
</script>

<style >
    .icon {
        margin: 10px;
        width:  3vw;
        height: 3vw;
    }
    .lefter {
        height: 94vh;
        width: 5%;
        float: left;
        background: white;
    }
    .titleMargin {
        align-items: left;
        position: absolute;
        left: 12%;
        right: 0;
        top: 2.5%;
        transform: translateY(-50%);
    }
    .taskIcon {
        position: absolute;
        left: -7%;
        right: 0;
        top: 22.5%;
    }
    .iconOnCenter {
        margin-top: 1.1vw;
        text-align: center;
    }
    .lefting {
        float: left;
    }
    .leftBlock {
        float: left;
        height: 95vh;
        width: 5vh;
    }
        @media (max-width: 1024px) {
    .lefter {
        height: 130vh;
    }}
         @media (max-width: 765px) {
    .lefter {
        min-height: 100%;
        height: 140vh;
        width: 12%;
        float: left;
        background: white;
    }
    .icon {
        margin: 10px;
        width:  6vw;
        height: 6vw;
    }
}
         @media (max-width: 539px) {
    .lefter {
        display: none;
    }
}
           @media (max-width: 540px) {
    .lefter {
        height: 240vh;
    }}
</style>
```
<br><br>

<p align = center>Приложение Г 

<p align = center>Листинг компонента Mainer

```html
<template>
<!-- eslint-disable max-len -->
    <div id="MainBlock" class="right">
        <div class="infoBlock">
            <stats-bars class="blockMargin infoBlockStatus"></stats-bars>
            <task-panel class="inLineblock blockTaskMargin"></task-panel>
            <stik class="inLineblock blockMargin"></stik>
            <event-panel class="inLineblock eventPanelMargin"></event-panel>
        </div>
    </div>
<!-- eslint-enable max-len -->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import StatsBars from './statsBar.vue';
import TaskPanel from './taskPanel.vue';
import EventPanel from './eventPanel.vue';
import Stik from './stik.vue';
const url = 'http://localhost:8080/admission/';
export default Vue.extend({
  components: {
    StatsBars,
    TaskPanel,
    EventPanel,
    Stik,
  },
});
</script>

<style >
    .blockMargin {
        margin: 8px;
    }
    .blockTaskMargin {
        margin: 8px;
         vertical-align:top;
    }
    .inLineblock {
        display: inline-block;
    }
    .right {
        height: 100vh;
        width: 95%;
        float: right;
    }
    body {
        margin: 0;
        background-color: #FFE6EA;
    }
    .eventBlockMargin {
        margin: 10px;
    }
    .eventPanelMargin {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .infoBlock {
        width: 95vw;
         }
    .infoBlockStatus {
                    text-align:left;
         }
     @media (max-width: 765px) {
         .infoBlock {
            margin: 0 auto;
            text-align:center;
            float: left;
            width: 80vw;
         }
        .infoBlockStatus {
            width: 640px;
            margin: 0 auto;
            display: block;
         }
            .blockTaskMargin {
        margin: 8px;
        margin: 0 auto;
    }
        .right {
        height: 100vh;
        width: 80%;
        float: left;
    }
}
     @media (max-width: 703px) {
        .infoBlockStatus {
            width: 440px;
            margin: 0 auto;
            display: block;
         }
}
     @media (max-width: 703px) {
        .infoBlockStatus {
            width: 440px;
            margin: 0 auto;
            display: block;
         }
}
 @media (max-width: 539px) {
         .infoBlock {
        width: 100vw;
         }
 }
  @media (max-width: 442px) {
            .infoBlockStatus {
            width: 240px;
         }
 }
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;900&display=swap');
</style>
```
<br><br>
