#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace LogAndRegistration.Models;
using System.ComponentModel.DataAnnotations.Schema;

public class Register {
    [Key]
    public int UserId { get; set; } 
    [Required]
    [MinLength(2)]
    [Display(Name ="First Name :")]
    public string FirstName { get; set; }
    [Required]
    [MinLength(2)]
    [Display(Name ="Last Name :")]
    public string LastName { get; set; }
    [Required]
    [UniqueEmail]
    [EmailAddress]
    [Display(Name ="Email :")]
    public string Email { get; set; }
    [Required]
    [DataType(DataType.Password)]  
    [MinLength(8, ErrorMessage="Password must be 8 characters or longer!")]
    [Display(Name ="Password :")]
    public string Password { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
    [NotMapped]
    [Compare("Password")]
    [DataType(DataType.Password)]  
    [Display(Name ="PW Confirm :")]
    public string PwConfirm { get; set; }
}

public class UniqueEmailAttribute : ValidationAttribute
{
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        if (value==null)
        {
            return new ValidationResult("Error");
        }
        MyContext _context = (MyContext)validationContext.GetRequiredService(typeof(MyContext));
        if (_context.Users.Any(c=>c.Email==value.ToString()))
        {
            return new ValidationResult("This Email is already exist");
        }
        return ValidationResult.Success;
    }
}

