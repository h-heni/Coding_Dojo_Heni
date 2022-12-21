using Microsoft.AspNetCore.Mvc;
namespace Portfolio.Controllers;     //be sure to use your own project's namespace!
    public class HelloController : Controller   //remember inheritance??
    {
        //for each route this controller is to handle:
        [HttpGet]       //type of request
        [Route("")]     //associated route string (exclude the leading /)
        public string Index()
        {
            return "Hello World from HelloController!";
        }
        [HttpGet("projects")]
        public string Project()
        {
            return "These are my projects";
        }
        [HttpGet("contact")]
        public string Contact()
        {
            return "This is my Contact";
        }
    }

