#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
namespace BankAccounts.Models;

public class MyContext : DbContext 

{ 
    public MyContext(DbContextOptions options) : base(options) { }
    // the "BankAccounts" table name will come from the DbSet property name
    public DbSet<Register> Users { get; set; } 
    public DbSet<Transaction> Transactions { get; set; } 
}
