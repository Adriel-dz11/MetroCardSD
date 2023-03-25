using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DB
{
    public class Users
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id_User { get; set; }
        public string User { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Cell { get; set; }
        public string Mail { get; set; }
        public double Cash { get; set; }


        public static List<Users> DB()
        {
            var List = new List<Users>()
            {
            new Users
            {
                Id_User = 1,
                User = "Clara",
                Password = "123.",
                Name = "Clara Diaz",
                Cell = "829-273-7683",
                Mail = "clarainesdiazangeles11@gmail.com",
                Cash = 10000.00
            },

            new Users
            {
                Id_User = 2,
                User = "ArMD",
                Password = "12345.",
                Name = "Arlenes Diaz",
                Cell = "829-273-7683",
                Mail = "clarainesdiazangeles11@gmail.com",
                Cash = 10000.00
            },
            new Users
            {
                Id_User = 3,
                User = "MariaDA",
                Password = "123456.",
                Name = "Maria Diaz",
                Cell = "829-273-7683",
                Mail = "clarainesdiazangeles11@gmail.com",
                Cash = 10000.00
            },

            new Users
            {
                Id_User = 4,
                User = "CrisS",
                Password = "1234.",
                Name = "Cris Sanchez",
                Cell = "829-273-7683",
                Mail = "clarainesdiazangeles11@gmail.com",
                Cash = 10000.00
            }

        };
            return List;
    
    }

    }
}
