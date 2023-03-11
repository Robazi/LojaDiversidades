using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LojaDiversidades.Api.Data;
using Microsoft.AspNetCore.Authorization;

namespace LojaDiversidades.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutosController : ControllerBase
    {
        private readonly LojaDiversidadesDbContext _context;

        public ProdutosController(LojaDiversidadesDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<IEnumerable<Produto>>> GetProdutos()
        {
            return await _context.Produtos.ToListAsync();
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<ActionResult<Produto>> GetProduto(int id)
        {
            var produto = await _context.Produtos.FindAsync(id);

            if (produto == null)
            {
                return NotFound();
            }

            return produto;
        }

        [HttpPut("{id}")]
        [Authorize(Roles ="administrador")]
        public async Task<IActionResult> PutProduto(int id, Produto produto)
        {
            if (!ProdutoExists(id))
            {
                return NotFound();
            }
            produto.Id = id;
            _context.Entry(produto).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPut("comprar")]
        [Authorize(Roles = "cliente")]
        public async Task<IActionResult> PutComprar([FromBody] Produto produto)
        {
            var produtoCadastrado = await _context.Produtos.FindAsync(produto.Id);
            if (produtoCadastrado == null)
            {
                return NotFound();
            }
            
            produtoCadastrado.Quantidade -= produto.Quantidade;
            _context.Entry(produtoCadastrado).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPost]
        [Authorize(Roles = "administrador")]
        public async Task<ActionResult<Produto>> PostProduto(Produto produto)
        {
            _context.Produtos.Add(produto);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProduto", new { id = produto.Id }, produto);
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "administrador")]
        public async Task<IActionResult> DeleteProduto(int id)
        {
            var produto = await _context.Produtos.FindAsync(id);
            if (produto == null)
            {
                return NotFound();
            }

            _context.Produtos.Remove(produto);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProdutoExists(int id)
        {
            return (_context.Produtos?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
