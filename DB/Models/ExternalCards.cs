using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DB.Models
{
    public class ExternalCards
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CardID { get; set; }
        [Required]
        public string CardNumber { get; set; }
        public int Amount { get; set; }
        public string Currency { get; set; }
        public string CardType { get; set; }
        public string Description { get; set; }

        [ForeignKey("UserID")]
        public virtual Users Users { get; set; }
    }
}