using LojaDiversidades.Models;
using Microsoft.AspNetCore.Identity;

namespace LojaDiversidades.Repositorio
{
    public static class UsuarioRepositorio
    {
        public static UsuarioModel Get(string login, string senha)
        {
            var usuarios = new List<UsuarioModel>
            {
                new() { Id = 1, Login = "rodbaz", Senha = "rodbaz00", Funcao = "administrador" },
                new() { Id = 2, Login = "bazsant", Senha = "bazsant2023", Funcao = "cliente" }
            };

            return usuarios
            .FirstOrDefault(x => 
            x.Login == login 
            && x.Senha == senha);
        }
    }
}
