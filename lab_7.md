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
<p align = center >Отчет по лабораторной работе № 7
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

<p align = justify style="text-indent: 25px;">Цель: создать сервер на C#, реализовать работы 3 и 5 с использованием сервера.
<br/><br/>

<p align = justify style="text-indent: 25px;">
Задачи:

1. Организовать процесс работы над лабораторной работой.
1. Создать сервер.
1. Повторить работу лабораторных работ 3 и 5 через сервер.
<br/><br/>

<p align = justify style="text-indent: 25px;">Ход выполнения:

1. Организовать процесс работы над лабораторной работой.
<p align = justify style="text-indent: 25px;">
Создана новая ветка в репозитории для выполнения работы.
Ссылка на репозиторий: https://github.com/Rm-men/labs_web.

2. Создать сервер
<p align = justify style="text-indent: 25px;">
В ходе выполнения лабораторной работы было создано приложение, запускающее сервер, реализованная через библиотеку RestPanda листинг программного кода привдене в приложении А. Для запросов созданы классы User и Student, листинг классов представлен в приложении Б. 

3. Повторить работу лабораторных работ 3 и 5 через сервер.
<p align = justify style="text-indent: 25px;">Необходимо реализовать авторизацию, регистрацию, вывод таблицы пользователей и вывод окна детализации пользователя. Демонстрация работы представлена на рисунках 1,2,3,4,5 и 6. Листинг программного кода классов находится в приложениях В и Г
Демонтсрация работы сервера представлена на рисунках 1, 2, 3.
<p align=center><img src=./src/l7_aut.png></p>
<p align = center>Рисунок 1 - Демонстрация успешной авторизации
<br><br>
<p align=center><img src=./src/l7_eror_l.png></p>
<p align = center>Рисунок 2 - Демонстрация не успешной авторизации
<br><br>
<p align=center><img src=./src/l7_l_sv.png></p>
<p align = center>Рисунок 3 - Демонстрация успешной регистрации
<br><br>
<p align=center><img src=./src/l7_eror_r.png></p>
<p align = center>Рисунок 4 - Демонстрация не успешной регистрации
<br><br>
<p align=center><img src=./src/l7_table.png></p>
<p align = center>Рисунок 5 - Демонстрация вывода таблицы
<br><br>
<p align=center><img src=./src/l7_person.png></p>
<p align = center>Рисунок 6 - Демонстрация детализации пользователя
<br><br>

<p align = justify style="text-indent: 25px;">Вывод: в ходе выполнения работы создан сервер на языке C# с использованием библиотеки RestPanda.

<br><br>
<p align = center>Приложение А

<p align = center>Листинг класса HandlerAuth

```c#
using RestPanda;

namespace WebServer;

public class Program
{
    private static List<DateTime> _times = new();

    public static int GetTimes()
    {
        _times.Add(DateTime.Now);
        foreach (var time in _times.Where(time => (time - _times[^1]).Minutes >= 1))
        {
            _times.Remove(time);
        }
        return _times.Count;
    }

    public static void Main(string[] args)
    {
        var url = "http://localhost:8083/";
        Console.WriteLine("Start server...");
        var server = new PandaServer(url, typeof(Program));
        server.Start();
        Console.WriteLine("Server started at " + url);
        Console.WriteLine("Press any key to stop server...");
        Console.Read();
        server.Stop();
    }
}
```
<br><br>

<p align = center>Приложение Б

<p align = center>Листинг Классов Student и  Users

```js

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace WebServer.Entity
{
    public class Student
    {
        public static List<Student> Students { get; } = new(new[]
    {
        new Student(1, "Человеков", "Человек", "Человеческий", 666, "chel@cmail.ch"),
        new Student(2, "НеЧеловеков", "НеЧеловек", "НеЧеловеческий", 777, "nnn@nemail.ch"),
        new Student(3, "Некин", "Нек", "Некиин", 30, "nene@nepochta.by"),
        new Student(4, "Сахаров", "Профессор", "Дадакович", 58, "dada@yantar.su"),
    });

        public int id { get; set; }
        public string fio { get; set; }
        public int age { get; set; }
        public string email { get; set; }

        public Student()
        {
        }

        public Student(int id, string lastName, string firstName, string middleName, int age, string email)
        {
            this.id = id;
            this.fio = lastName + " " + firstName + " " + middleName;
            this.age = age;
            this.email = email;
        }

        public static Student? GetByID(dynamic id)
        {
            return Students.FirstOrDefault(stud => stud.id == id);
        }

        public static string Serialize(Student stud)
        {
            return JsonSerializer.Serialize(stud);
        }
    
    }
    public class User
{
    public string login { get; set; }
    public string pass { get; set; }

    public static List<User> Users = new List<User>() 
    { 
        new User() { login = "asdad", pass = "asdad" },
        new User() { login = "dadadad", pass = "dada" },
    };
    
}
}

```
<br><br>

<p align = center>Приложение В

<p align = center>Листинг класса GetStudent

```js
using RestPanda.Requests.Attributes;
using RestPanda.Requests;
using WebServer.Entity;
namespace WebServer.Requests;

[RequestHandler("/get")]
public class HandlerGetStudent
{
    [Get]
    public static void GetStuds(PandaRequest request, PandaResponse response)
    {
        response.AddHeader("Time", DateTime.Now.ToString("O"));
        response.AddHeader("Token", Guid.NewGuid().ToString());
        response.AddHeader("Request-Per-Minutes", Program.GetTimes().ToString());
        if (!request.Params.ContainsKey("id"))
        {
            response.Send(Student.Students);
            return;
        }
        var f = request.Params["id"];
        int start;
        if (!int.TryParse(f, out start))
        {
            response.Send("Error");
            return;
        }
        if (Student.Students.All(s => s.id != start))
        {
            response.Send("Error");
            return;
        }
        response.Send(Student.Students.Single(s => s.id == start));
    }
}
```
<br><br>

<p align = center>Приложение Г

<p align = center>Листинг компонента App

```js
using RestPanda.Requests;
using RestPanda.Requests.Attributes;
using WebServer.Entity;

namespace WebServer.Requests;

[RequestHandler("/author")]
public class HandlerAuth
{
    [Post("check")]
    public static void Check(PandaRequest request, PandaResponse response)
    {
        var user = request.GetObject<User>();
        response.AddHeader("Time", DateTime.Now.ToString("O"));
        response.AddHeader("Token", Guid.NewGuid().ToString());
        response.AddHeader("Request-Per-Minutes", Program.GetTimes().ToString());

        foreach (var u in User.Users)
        {
            if (user.login == u.login)
            {
                response.Send(new { IsValid = false });
                return;
            } 
        }
        response.Send(new { IsValid = true });
    }

    [Post("login")]
    public static void Login(PandaRequest request, PandaResponse response)
    {
        var user = request.GetObject<User>();
        response.AddHeader("Time", DateTime.Now.ToString("O"));
        response.AddHeader("Token", Guid.NewGuid().ToString());
        response.AddHeader("Request-Per-Minutes", Program.GetTimes().ToString());

        foreach (var u in User.Users)
        {
            if (user.login == u.login && user.pass == u.pass)
            {
                response.Send(new { completed = true });
                return;
            }           
        }        
        response.Send(new { completed = false });

    }
}
```
<br><br>