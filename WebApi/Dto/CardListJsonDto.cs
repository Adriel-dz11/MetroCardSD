namespace WebApi.Dto
{
    public class CardListJsonDto
    {
        public bool success { get; set; }
        public string message { get; set; }
        public object result { get; set; }
        public List<CardsListDto> ListCards { get; set; }
    }
}
