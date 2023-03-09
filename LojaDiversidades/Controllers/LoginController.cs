using LojaDiversidades.Models;
using LojaDiversidades.Models.Requests;
using LojaDiversidades.Models.Responses;
using LojaDiversidades.Repositorio;
using LojaDiversidades.Servicos;
using Microsoft.AspNetCore.Mvc;

namespace LojaDiversidades.Controllers
{
    [ApiController]
    [Route("v1")]
    public class LoginController : ControllerBase
    {
        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<UsuarioResponseModel>> AuthenticateAsync([FromBody] UsuarioRequestModel model)
        {
            var usuario = UsuarioRepositorio.Get(model.Usuario, model.Senha);
            
            if (usuario == null) 
                return NotFound(new { messege = "Usuário ou senha inválidos" });

            var token = TokenServico.GerarToken(usuario);

            return Ok(new UsuarioResponseModel
            {
                Usuario = usuario.Login,
                Token = token,
                Funcao = usuario.Funcao
            });
            


        }
    }
}
