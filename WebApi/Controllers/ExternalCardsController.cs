using DB;
using DB.Models;
using Microsoft.AspNetCore.Mvc;
using Stripe;
using System;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExternalCardsController : ControllerBase
    {
        private readonly MetroCardContext _context;

        public ExternalCardsController(MetroCardContext context)
        {
            _context = context;
        }

        [HttpPost("process-payment")]
        public IActionResult ProcessPayment([FromBody] PaymentRequest paymentRequest)
        {
            StripeConfiguration.ApiKey = "sk_test_51MupeTGQwZvL7vth6DwJkHUGS4P8yBm9DVZUTSLwcUMJDuNLlBUV3TljTIiStAlnLrdMoX7G6qUF0gF7QurV7EKc00hYrJ2LHD";

            var chargeOptions = new ChargeCreateOptions
            {
                Amount = paymentRequest.Amount,
                Currency = paymentRequest.Currency,
                Description = paymentRequest.Description,
                Source = paymentRequest.TokenId,
            };

            var chargeService = new ChargeService();
            var charge = chargeService.Create(chargeOptions);

            if (charge.Status == "succeeded")
            {
                var payment = new ExternalCards
                {
                    Description = paymentRequest.Description,
                    Amount = paymentRequest.Amount,
                    Currency = paymentRequest.Currency,
                   
                };

                _context.Add(payment);
                _context.SaveChanges();

                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
    }

    public class PaymentRequest
    {
        public string Description { get; set; }
        public int Amount { get; set; }
        public string Currency { get; set; }
        public string TokenId { get; set; }
    }
}
