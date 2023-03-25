using DB;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebApi.Dto;

namespace WebApi.Controllers
{
    public class UsersController : ControllerBase
    {
        public IConfiguration _Configuration;
        public UsersController(IConfiguration Configuration) 
        {
            _Configuration = Configuration;
        
        }
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

    }
}
}
