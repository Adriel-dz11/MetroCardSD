using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DB
{
    public class InternalCards
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CardID { get; set; }
        public int Amount { get; set; }
        public int Travels { get; set; }
        public bool IsValid { get; set; }

        [ForeignKey("UserID")]
        public virtual Users Users { get; set; }

    }
}
