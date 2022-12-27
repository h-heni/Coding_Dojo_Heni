#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace Crud.Models;

public class Dish
{
    [Key]
    public int DishId {get;set;}
    
    [Required]
    [Display(Name ="Name of Dish")]
    [MaxLength(45)]
    public string Name {get;set;}
    
    [Required]
    [Display(Name ="Chef's Name")]
    [MaxLength(45)]
    public string Chef {get;set;}

    [Required]
    [Display(Name ="Tastiness")]
    [Range(0,6)]
    public int Tastiness {get;set;}

    [Required]
    [Display(Name ="# of Calories")]
    [Range(1,int.MaxValue)]
    public int Calories {get;set;}

    [Display(Name ="Description")]
    public string Description {get;set;}
    
    public DateTime CreatedAt { get; set; }= DateTime.Now;

    public DateTime UpdatedAt { get; set; } =DateTime.Now;
}