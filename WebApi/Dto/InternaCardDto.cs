using DB;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Dto
{
    public class InternaCardDto
    {
        public int Amount { get; set; }
        public int Travels { get; set; }
        public bool IsValid { get; set; }
        public int Users { get; set; }
    }
}
