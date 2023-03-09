using Microsoft.EntityFrameworkCore;

namespace LojaDiversidades.Data
{
    public class LojaDiversidadesDbContext : DbContext
    {
        public LojaDiversidadesDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Produto> Produtos { get; set; }
    }
}
