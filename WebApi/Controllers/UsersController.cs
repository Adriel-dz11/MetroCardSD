using DB;
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
    [Route("User")]
    public class UsersController : ControllerBase
    {
        public IConfiguration _Configuration;
        public UsersController(IConfiguration Configuration) 
        {
            _Configuration = Configuration;
        
        }

        [HttpPost]
        [Route("Login")]
        public dynamic Login([FromBody] Object optData)
        {
            var data = JsonConvert.DeserializeObject<dynamic>(optData.ToString());
            string User = data.Users.ToString();
            string Password = data.Password.ToString();

            Users users = Users.DB().Where(x => x.User == User && x.Password == Password).FirstOrDefault();

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
                new Claim("id", users.Id_User),
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
