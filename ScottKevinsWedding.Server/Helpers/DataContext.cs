namespace WebApi.Helpers;

using Microsoft.EntityFrameworkCore;
using ScottKevinsWedding.Server;

public class DataContext : DbContext
{
    protected readonly IConfiguration Configuration;

    public DataContext(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        // connect to sql server with connection string from app settings
        options.UseSqlServer(Configuration.GetConnectionString("weddingContext"));
    }

    public DbSet<SongPick> songPicks { get; set; }
    public DbSet<Rsvp> rsvps { get; set; }

}