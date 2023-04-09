using DB;
using DB.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WebApi.Dto;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("user")]
    public class UsersController : ControllerBase
    {
        public IConfiguration _Configuration;
        private readonly IRepository<Users> _repository;
        public UsersController(IConfiguration Configuration, IRepository<Users> repository) 
        {
            _Configuration = Configuration;
            _repository = repository;
        
        }

    [HttpPost]
    [Route("login")]
        public dynamic Login([FromBody] LoginDto optData)
        {
            //var data = JsonConvert.DeserializeObject<dynamic>(optData.ToString());
            string User = optData.User;
            string Password = optData.password;

            Users users = _repository.GetFirstOrDefault(x => x.User == User && x.Password == Password);

            if(users == null)
    {
                return new
                {
                    success = false,
                    messge = "Usuario o Contraseña incorrecto",
                    result = ""
                };
            }

            var Jwt = _Configuration.GetSection("Jwt").Get <JwtDto>();

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, Jwt.Subjec),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                new Claim("Id", users.Id_User.ToString()),
                new Claim("usuario", users.User),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Jwt.Key));
            var singIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                Jwt.Issuer,
                Jwt.Audience,
                claims,
                expires: DateTime.Now.AddMinutes(60),
                signingCredentials: singIn
                
                );

            return new
            {

                success = true,
                Message = "Realizado con exito",
                result = new JwtSecurityTokenHandler().WriteToken(token)
            };
    }
}
}
