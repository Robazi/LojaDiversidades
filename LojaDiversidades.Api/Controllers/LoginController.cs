using LojaDiversidades.Api.Models;
using LojaDiversidades.Api.Models.Requests;
using LojaDiversidades.Api.Models.Responses;
using LojaDiversidades.Api.Repositorio;
using LojaDiversidades.Api.Servicos;
using Microsoft.AspNetCore.Mvc;

namespace LojaDiversidades.Api.Controllers
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
