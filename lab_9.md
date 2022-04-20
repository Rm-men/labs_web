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
<p align = center >Отчет по лабораторной работе № 9
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

<p align = justify style="text-indent: 25px;">Цель: реализовать отправку сообщений с приветствием, с картинкой и pdf файлом на почту.
<br/><br/>

<p align = justify style="text-indent: 25px;">
Задачи:

1. Организовать процесс работы над лабораторной работой
1. Реализовать отправку сообщений
<br/><br/>

<p align = justify style="text-indent: 25px;">Ход выполнения:

1. Организовать процесс работы над лабораторной работой.
<p align = justify style="text-indent: 25px;">
Создана новая ветка в репозитории для выполнения работы.
Ссылка на репозиторий: https://github.com/Rm-men/labs_web.

2. Реализовать отправку сообщений
<p align = justify style="text-indent: 25px;">
Отправка сообщений реализована с помощью библиотеки SmtpClient, программный листинг класса приведен в приложении А

<p align=center><img src=./src/l9_pdf.png></p>
<p align = center>Рисунок 1 - Приветствие и прикрепление pdf
<br><br>
<p align=center><img src=./src/l9_table.png></p>
<p align = center>Рисунок 2 - Прикрепление фото и таблицы
<br><br>

<p align = justify style="text-indent: 25px;">Вывод: в ходе выполнения работы реализована отправка сообщений на почту.

<br><br>
<p align = center>Приложение А

<p align = center>Листинг компонента Charts

```js
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Mail;
using RestPanda.Requests.Attributes;
using RestPanda.Requests;
using WebServer.Entity;
using System.Net;

namespace WebServer.Requests
{
    [RequestHandler]
    public class HandlerEmail
    {
        private static string FillTable()
        {
            var s = new StringBuilder("<table style=\"border-collapse: collapse\">" + Environment.NewLine);
            s.Append("<tr><th>id</th><th>ФИО</th><th>Возраст</th><th>Почта</th></tr>" + Environment.NewLine);
            foreach (var student in Student.Students)
            {
                s.Append("<tr>").Append($"<td>{student.id}</td>").Append($"<td>{student.fio}</td>")
                    .Append($"<td>{student.age}</td>").Append($"<td>{student.email}</td>").Append("</tr>" + Environment.NewLine);
            }
            s.Append("</table>");
            return s.ToString();
        }

        [Get]
        public static void CommitMessange(PandaRequest request, PandaResponse response)
        {
            var from = new MailAddress("service_phone_in_kirov@mail.ru", "Администрация сервисного центра по ремонту телефонов");
            var to = new MailAddress("ro.sym@yandex.ru", "Пользователь");
            var msg = new MailMessage(from, to);
            msg.Subject = "PDF file";
            msg.Attachments.Add(
                new Attachment("C://mail.pdf"));
            msg.Body = "Тестовое сообщение";
            using (var smtp = new SmtpClient("smtp.mail.ru", 587))
            {
                smtp.Credentials = new NetworkCredential("service_phone_in_kirov@mail.ru", "mLfsyTvqZpfEDu0VzUih");
                smtp.EnableSsl = true;
                smtp.Send(msg);
            }

            var msg2 = new MailMessage(from, to);
            msg2.Subject = "Html документ";
            msg2.Body = {длинная__ссылка}
            msg2.Body += FillTable();
            msg2.IsBodyHtml = true;
            using (var smtp = new SmtpClient("smtp.mail.ru", 587))
            {
                smtp.Credentials = new NetworkCredential("service_phone_in_kirov@mail.ru", "mLfsyTvqZpfEDu0VzUih");
                smtp.EnableSsl = true;
                smtp.Send(msg2);
            }
            response.Send("");
        }
    }
}
```
<br><br>