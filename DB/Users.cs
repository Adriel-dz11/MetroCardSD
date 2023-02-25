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

    }
}
