using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using DB;
using DB.Models;
using DB.Repository;
using WebApi.Dto;
using Azure;
using System.Net;
using System.IdentityModel.Tokens.Jwt;

namespace WebApi.Controllers
{

    [Produces("application/json")]
    [Route("api/[controller]/[action]")]
    public class InternalCardsController : ControllerBase
    {


        private MetroCardContext _context;

        private readonly IRepository<InternalCards> _internalRepository;
        private readonly IRepository<Users> _userRepository;

        public InternalCardsController(MetroCardContext context, IRepository<InternalCards> internalRepository, IRepository<Users> userRepository)
        {
            _context = context;
            _internalRepository = internalRepository;
            _userRepository = userRepository;
        }

        //get que atraiga el listado de todas las tarjetas
        [HttpGet]
        public IEnumerable<InternalCards> GetAllCards()
        {
            return _context.InternalCards.ToList();
        }

        //get que atraiga una tarjeta del metro individual
        [HttpGet("id", Name = "cardCreada")]
        public IActionResult GetById(Guid id)
        {

            var card = _context.InternalCards.FirstOrDefault(x => x.CardID == id);

            if (card == null)
            {
                return NotFound();
            }

            return Ok(card);
        }

        //get que atraiga una tarjeta del metro individual
        [HttpGet("id", Name = "CardByUser")]
        public async Task<CardListJsonDto> GetByUser(int id)
        {

            ResponseMessageJson prevalidate = await PreValidateToken();

            if (prevalidate.success != true)
            {
                return new CardListJsonDto()
                {
                    success = false,    
                    message = "Usuario no valido",
                    result = false
                };
            }

            List<CardsListDto> cardList = new List<CardsListDto>();
            var cardListDto = new CardsListDto();

            var cards  = _internalRepository.GetAll(x => x.Users == prevalidate.UserID).ToList();

            cards.ForEach(cardDto =>
            {
                var cardListDto = new CardsListDto
                {
                    CardID= cardDto.CardID,
                    Amount= cardDto.Amount,
                    Travels= cardDto.Travels,
                    IsValid= cardDto.IsValid,
                    Users= cardDto.Users,
                };

                cardList.Add(cardListDto);
            });



            return new CardListJsonDto
            {
                success = true,
                result = "Consulta Exitosa",
                ListCards = cardList,
            };
        }

        //Petición para Anadir una tarjeta del metro 
        [HttpPost]
        public async Task<ResponseMessageJson> NewCard([FromBody] InternaCardDto card)
        {

            ResponseMessageJson prevalidate = await PreValidateToken();

            if (prevalidate.success != true)
            {
                return new ResponseMessageJson()
                {
                    success = false,
                    message = "Fallo agregando la tarjeta",
                    result = true
                };
            }

            try
            {

                InternalCards newCard = new InternalCards()
                {
                    Amount = card.Amount,
                    Travels = card.Travels,
                    IsValid = card.IsValid,
                    Users = prevalidate.UserID
                };

                await _internalRepository.InsertAsync(newCard);


                return new ResponseMessageJson()
                {
                    success = false,
                    message = "Tarjeta agregada con exito",
                    result = true
                };

            }
            catch (Exception ex)
            {
                return new ResponseMessageJson()
                {
                    success = false,
                    message = "Ha ocurrido un error interno",
                    result = false
                };
            }

        }


        //Petición para modificar una tarjeta del metro 
        [HttpPut("{id}")]
        public IActionResult UpdateCards([FromBody] InternalCards card, Guid id)
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
        public IActionResult DeleteCards(Guid id)
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


        #region Private Method
        private async Task<ResponseMessageJson> ValidateToken(JwtSecurityToken identity)
        {
            try
            {
                if (identity.Claims.Count() == 0)
                {
                    return new ResponseMessageJson
                    {
                        success = false,
                        message = "Su token es invalido",
                        result = "."
                    };
                }

                string id = identity.Claims.FirstOrDefault(x => x.Type == "Id").Value;
                Users usuario = await _userRepository.GetFirstOrDefaultAsync(match: w => w.Id_User.ToString() == id);

                if (usuario == null)
                {
                    return new ResponseMessageJson
                    {
                        success = false,
                        message = "El usuario no existe",
                        result = "."
                    };
                }

                return new ResponseMessageJson
                {
                    success = true,
                    message = "Token validado",
                    result = "Token validado",
                    UserID = usuario.Id_User
                };
            }
            catch (Exception ex)
            {
                return new ResponseMessageJson
                {
                    success = false,
                    message = "Catch: " + ex.Message,
                    result = "."
                };
            }
        }

        private async Task<ResponseMessageJson> PreValidateToken()
        {
            try
            {
                string token = HttpContext.Request.Headers["Authorization"].FirstOrDefault();

                if (token == null)
                {
                    return new ResponseMessageJson
                    {
                        success = false,
                        message = "No ha llegado ningun token",
                        result = "."
                    };
                }

                token = token.Split(" ").Count() > 1 ? token.Split(" ")[1] : token;


                try
                {
                    JwtSecurityToken test = new JwtSecurityTokenHandler().ReadJwtToken(token);

                    if (test.Claims.Count() == 0)
                    {
                        return new ResponseMessageJson
                        {
                            success = false,
                            message = "Token sin claims",
                            result = "."
                        };
                    }

                    ResponseMessageJson result = await ValidateToken(test);

                    if (result.message == null)
                    {
                        return new ResponseMessageJson { success = false, message = "Usuario no registrado", result = "" };
                    }

                    return new ResponseMessageJson { success = true, message = "Token validado", result = result.message, UserID = result.UserID };

                }
                catch (Exception ex)
                {
                    return new ResponseMessageJson
                    {
                        success = false,
                        message = "Catch: " + ex.Message,
                        result = "."
                    };
                }


            }
            catch (Exception ex)
            {
                throw new Exception($"Ha ocurrido un error {ex}");

            }
        }
        #endregion
    }
}