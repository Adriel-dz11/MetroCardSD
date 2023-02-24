using Microsoft.EntityFrameworkCore;

namespace DB
{
    public class MetroRDContext : DbContext
    {
        public MetroRDContext(DbContextOptions<MetroRDContext> options) : base(options)
        {

        }
    }
}