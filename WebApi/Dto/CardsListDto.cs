using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Dto
{
    public class CardsListDto
    {
        public Guid CardID { get; set; }
        public int Amount { get; set; }
        public int Travels { get; set; }
        public bool IsValid { get; set; }
        public int Users { get; set; }
    }
    public class CardsListDtoOutput
    {

        public CardsListDtoOutput()
        {
            Items = new List<CardsListDto>();
        }

        public List<CardsListDto> Items { get; set; }

    }
}
