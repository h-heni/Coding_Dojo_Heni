#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace ChefAndDishes.Models;

public class Dish 
{
    [Key]
    public int DishId { get; set; } 
    public string DishtName { get; set; }
    public int Calories { get; set; }
    public int Tastiness { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
    public int ChefId {get;set;}
    public Chef ? Creator { get; set; }
    
}