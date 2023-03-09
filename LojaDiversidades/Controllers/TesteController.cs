using LojaDiversidades.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace LojaDiversidades.Controllers
{
    [ApiController]
    public class TesteController : ControllerBase
    {
        [HttpGet]
        [Route("anonimo")]
        [AllowAnonymous]
        public string Anonimo() => "Anônimo";

        [HttpGet]
        [Route("autenticado")]
        [Authorize]
        public string Autenticado() => $"Autenticado - {User.Identity.Name}";

        [HttpGet]
        [Route("cliente")]
        [Authorize(Roles = "cliente,administrador")]
        public string Cliente() => "Cliente";

        [HttpGet]
        [Route("administrador")]
        [Authorize(Roles = "administrador")]
        public string Administrador() => "Administrador";
    }
}