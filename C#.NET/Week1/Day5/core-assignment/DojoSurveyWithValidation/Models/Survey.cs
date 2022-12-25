#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;

namespace DojoSurveyWithValidation.Models;
public class Survey
{
    [Required(ErrorMessage ="Name is required")]
    [Display(Name = "Your Name:")] 
    public string Name { get; set; }

    [Required(ErrorMessage ="First Name is required")]
    [Display(Name = "Your Location:")] 
    public string Location { get; set; }

    [Required(ErrorMessage ="First Name is required")]
    [Display(Name = "Your Language:")] 
    public string Language { get; set; }


    [MinLength(20,ErrorMessage ="Comment must be more than 20 Characters")]
    [Display(Name = "Your Comment is Optional:")] 
    public string? Comment { get; set; }

}