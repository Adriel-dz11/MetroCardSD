using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using DB;
using DB.Models;
using DB.Repository;

namespace WebApi.Controllers
{

    [Produces("application/json")]
    [Route("api/[controller]/[action]")]
    public class InternalCardsController : ControllerBase
    {


        private MetroCardContext _context;

        private readonly IRepository<InternalCards> _repository;

        public InternalCardsController(MetroCardContext context, IRepository<InternalCards> repository)
        {
            _context = context;
            _repository = repository;
        }

        //get que atraiga el listado de todas las tarjetas
        [HttpGet]
        public IEnumerable<InternalCards> GetAllCards()
        {
            return _context.InternalCards.ToList();
        }

        //get que atraiga una tarjeta del metro individual
        [HttpGet("id", Name = "cardCreada")]
        public IActionResult GetById(int id)
        {
            var card = _context.InternalCards.FirstOrDefault(x => x.CardID == id);

            if (card == null)
            {
                return NotFound();
            }

            return Ok(card);
        }


        ////Petición para Anadir una tarjeta del metro 
        //[HttpPost]
        //public IActionResult Post([FromBody] InternalCards card)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        _context.InternalCards.Add(card);
        //        _context.SaveChanges();
        //        return new CreatedAtRouteResult("cardCreada", new { id = card.CardID }, card);
        //    }
        //    return BadRequest(ModelState);

        //}

        //Petición para Anadir una tarjeta del metro 
        [HttpPost]
        public async Task<bool> NewCard([FromBody] InternalCards card)
        {
            await _repository.InsertAsync(card);

            return false;

        }


        //Petición para modificar una tarjeta del metro 
        [HttpPut("{id}")]
        public IActionResult UpdateCards([FromBody] InternalCards card, int id)
        {
            if (card.CardID != id)
            {
                return BadRequest();
            }
            _context.Entry(card).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
            return Ok(card);
        }
        //Petición para Eliminar una tarjeta del metro 
        [HttpDelete("{id}")]
        public IActionResult DeleteCards(int id)
        {
            var card = _context.InternalCards.FirstOrDefault(x => x.CardID == id);
            if (card.CardID == null)
            {
                return NotFound();
            }
            _context.InternalCards.Remove(card);
            _context.SaveChanges();
            return Ok(card);
        }
    }
}