#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
namespace ChefAndDishes.Models;

public class MyContext : DbContext 

{ 
    public MyContext(DbContextOptions options) : base(options) { }
    // the "Monsters" table name will come from the DbSet property name
    public DbSet<Chef> Chef { get; set; } 
    public DbSet<Dish> Dish { get; set; } 
}