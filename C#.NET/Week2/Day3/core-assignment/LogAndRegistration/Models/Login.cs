	#pragma warning disable CS8618
	using System.ComponentModel.DataAnnotations;

	namespace LogAndRegistration.Models;

	public class LoginUser
	{
	[Required]
    [EmailAddress]
    [Display(Name ="Email :")]
    public string LogEmail { get; set; }
    [Required]
    [MinLength(8, ErrorMessage="Password must be 8 characters or longer!")]
    [DataType(DataType.Password)]  
    [Display(Name ="Password :")]
    public string LogPassword { get; set; }
	}