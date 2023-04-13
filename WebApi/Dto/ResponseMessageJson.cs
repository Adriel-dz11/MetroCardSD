using System.Net;

namespace WebApi.Dto
{
    public class ResponseMessageJson
    {
        public bool success { get; set; }
        public string message { get; set; }
        public object result { get; set; }
        public int UserID { get; set; }
    }
}
