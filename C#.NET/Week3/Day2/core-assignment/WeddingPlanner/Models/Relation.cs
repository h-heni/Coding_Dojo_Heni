#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace WeddingPlanner.Models;
using System.ComponentModel.DataAnnotations.Schema;

public class Relation
{
    [Key]
    public int RelationId { get; set; }
    public int UserId { get; set; }
    public User ? Creator { get; set; }
    public int WeddingId { get; set; }
    public Wedding ? TheWedding { get; set; }
}