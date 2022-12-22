using Microsoft.AspNetCore.Mvc;
namespace DojoSurvey.Controllers;     //be sure to use your own project's namespace!
    public class HelloController : Controller   //remember inheritance??
    {
        //for each route this controller is to handle:
        [HttpGet]       //type of request
        [Route("")]     //associated route string (exclude the leading /)
        public ViewResult Index()
        {
            return View();
        }
        [HttpPost("result")]
        public IActionResult Project(string name,string location , string language , string comment)
        {
                
            ViewBag.name=name;
            ViewBag.location=location;
            ViewBag.language=language;
            ViewBag.comment=comment;

            return View ("Result");
        }
    
    }