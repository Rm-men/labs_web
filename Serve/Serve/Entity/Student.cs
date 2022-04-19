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
}
