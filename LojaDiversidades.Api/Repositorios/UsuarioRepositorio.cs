using LojaDiversidades.Api.Models;
using Microsoft.AspNetCore.Identity;

namespace LojaDiversidades.Api.Repositorio
{
    public static class UsuarioRepositorio
    {
        public static UsuarioModel Get(string login, string senha)
        {
            var usuarios = new List<UsuarioModel>
            {
                new() { Id = 1, Login = "admin", Senha = "admin#123", Funcao = "administrador" },
                new() { Id = 2, Login = "cliente", Senha = "cliente#123", Funcao = "cliente" }
            };

            return usuarios
            .FirstOrDefault(x => 
            x.Login == login 
            && x.Senha == senha);
        }
    }
}
