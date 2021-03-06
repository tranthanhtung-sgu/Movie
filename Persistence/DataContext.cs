using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<ChapUrl> ChapUrl { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
        }


    }
}