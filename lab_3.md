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
<p align = center >Отчет по лабораторной работе № 3
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

<p align = justify style="text-indent: 25px;">Цель: отправка post запросов через axios, проведение тестов с помощью Postman.
<br/><br/>

<p align = justify style="text-indent: 25px;">
Задачи:

1. Организовать процесс работы над лабораторной работой
1. Реализовать отправку post запросов через axios
1. Провести mock тестирование
<br/><br/>

<p align = justify style="text-indent: 25px;">Ход выполнения:

1. Организовать процесс работы над лабораторной работой.
<p align = justify style="text-indent: 25px;">
Создана новая ветка в репозитории для выполнения работы.
Ссылка на репозиторий: https://github.com/Rm-men/labs_web.
Установлен Postman и потрачено время на попытки разобраться с его функциональностью.

2. Реализовать отправку post запросов через axios
<p align = justify style="text-indent: 25px;">
Код реализации отправки post запроса, а так же весь метод для тестирования регистрации содержится в приложении A.
<br><br>


3. Провести mock тестирование
<p align = justify style="text-indent: 25px;">
В ходе выполнения работы были сделаны тестовые запросы через mock сервер. Параметры для необходимого ответы были выбраны соответствующие требуемому результату. Результаты тестирования приведены на рисунках 1,2,3,4,5

<p align=center><img src=./src/l3_autor_compl.png></p>
<p align = center>Рисунок 1 - ответ успешной авторизации
<br><br>

<p align=center><img src=./src/l3_autor_not_compl.png></p>
<p align = center>Рисунок 2 - ответ не успешной авторизации
<br><br>

<p align=center><img src=./src/l3_reg_good.png></p>
<p align = center>Рисунок 3 - ответ успешной регистрации
<br><br>

<p align=center><img src=./src/l3_reg_not_good.png></p>
<p align = center>Рисунок 4 - ответ не успешной регистрации
<br><br>

<p align=center><img src=./src/l3_reg_rasw.png></p>
<p align = center>Рисунок 5 - ответ при не совпадении подтверждающего пароля
<br><br>


<p align = justify style="text-indent: 25px;">Вывод: в ходе выполнения работы была изучена базовая функциональность инструмента тестирования Postman, а так же возможность mock тестирования post запросов, отправляемых с помощью axios.
<br><br>

<p align = center>Приложение А

<p align = center>(обязательное)
<p align = center> Листинг функции тестирования регистрации

```js
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
      const url = 'https://14952d01-23e7-4615-93ec-a09dc0a2ef77.mock.pstmn.io/reg';
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
```
<br><br>

<br><br>
<p align = center>Приложение Б

<p align = center>(справочное)

<p align = center>Библиографический список


1. Руководство по оформлению Markdown файлов / Artem Zhekov 2015// 2021 GitHub, Inc. URL:<https://gist.github.com/Jekins/2bf2d0638163f1294637>.(Дата обращения: 2.04.2022)

