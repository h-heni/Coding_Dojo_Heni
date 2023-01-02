#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;

namespace BankAccounts.Models;

public class Transaction
{
    [Key]
    public int TransacionId { get; set; }

    public decimal Amount { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;

    public Register ? Creator { get; set; }
    public int RegisterId { get; set; }


}