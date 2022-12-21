using Microsoft.AspNetCore.Mvc;
namespace Portfolio.Controllers;     //be sure to use your own project's namespace!
    public class HelloController : Controller   //remember inheritance??
    {
        //for each route this controller is to handle:
        [HttpGet]       //type of request
        [Route("")]     //associated route string (exclude the leading /)
        public ViewResult Index()
        {
            return View();
        }
        [HttpGet("projects")]
        public ViewResult Project()
        {
            return View();
        }
        [HttpGet("contact")]
        public ViewResult Contact()
        {
            return View();
        }
    }

