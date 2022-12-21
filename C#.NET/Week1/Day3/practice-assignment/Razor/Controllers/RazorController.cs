using Microsoft.AspNetCore.Mvc;
namespace Razor.Controllers;   
    public class HelloController : Controller  
    {
        [HttpGet]       
        [Route("")]    
        public ViewResult Index()
        {
            return View();
        }
    }