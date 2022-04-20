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
        public int id { get; set; }
        public string fio { get; set; }
        public int age { get; set; }
        public string email { get; set; }
        public bool gender { get; set; }
        public bool verefic { get; set; }
        public static List<Student> Students { get; } = new(new[]
    {
        new Student(1, "Человеков", "Человек", "Человеческий", 666, "chel@cmail.ch", true, false),
        new Student(2, "НеЧеловек", "НеЧеловек", "НеЧеловеческий", 777, "nnn@nemail.ch", true, false),
        new Student(3, "Дягтерева", "Василиса", "Ивановна", 30, "vdi@nepochta.by", false,true),
        new Student(4, "Сахаров", "Профессор", "Дадакович", 58, "dada@yantar.su", false,true),
    });

        public Student()
        {
        }

        public Student(int id, string lastName, string firstName, string middleName, int age, string email, bool gender, bool verefic)
        {
            this.id = id;
            this.fio = lastName + " " + firstName + " " + middleName;
            this.age = age;
            this.email = email;
            this.gender = gender;
            this.verefic = verefic;
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
