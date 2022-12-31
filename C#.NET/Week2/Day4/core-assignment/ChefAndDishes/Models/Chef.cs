#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace ChefAndDishes.Models;

public class  Chef 
{

    [Key]
    public int ChefId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    [Required]
    [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:yyyy-MM-dd HH:mm}")]
    public DateTime Birthday { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
    public List<Dish> CreatedDishes { get; set; } = new List<Dish>();
}