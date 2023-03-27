using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using DB.Models;

namespace WebApi.Controllers
{
    public class InternalCardsController : ControllerBase
    {
        

        private MetroCardContext _context;

        public InternalCardsController(MetroCardContext context)
        {
            _context= context;
        }

       
        
    }
}
