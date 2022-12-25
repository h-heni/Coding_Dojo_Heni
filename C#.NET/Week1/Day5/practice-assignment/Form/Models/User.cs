#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace Form.Models;

public class User
{
    [Required(ErrorMessage ="First Name is required")]
    [MinLength(4,ErrorMessage ="First Name Must be 4 Character length")]
    public string FirstName { get; set; }
    [Required(ErrorMessage ="Last Name is required")]
    [MinLength(4,ErrorMessage ="Last Name Must be 4 Character length")]
    public string LasttName { get; set; }
    [Required(ErrorMessage ="Age is required")]
    [Range(10,90,ErrorMessage ="Age Name Must be between 4 and 90 years")]
    public int Age { get; set; }
 
    [Required(ErrorMessage ="Email address is required")]
    [EmailAddress(ErrorMessage ="Invalid Email address")]
    public string Email { get; set; }
 
    [Required(ErrorMessage ="Password is required")]
    [MinLength(8,ErrorMessage ="Password must be 8 Char")]
    [DataType(DataType.Password)]
    public string Password { get; set; }
 }