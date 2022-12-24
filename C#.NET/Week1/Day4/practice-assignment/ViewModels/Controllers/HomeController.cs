using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ViewModels.Models;

namespace ViewModels.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }
    public List<User> UsersName(){

    return new List<User>()
            {
                new User(){ Name="heni"},
                new User(){ Name="iheb"},
                new User(){ Name="nassim"},
                new User(){ Name="anwer"},
            };
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        string msg = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quos hic adipisci aut animi beatae iste reiciendis, officiis ad cupiditate itaque nam sapiente, ratione distinctio laboriosam ea officia, libero dolore?";
        return View("Index",msg);
    }

    [HttpGet("numbers")]
    public IActionResult Numbers()
    {
        int [] num ={1,2,5,7,9,25};
        return View(num);
    }

    [HttpGet("users")]
    public IActionResult Users()
    {
    List<User> users =UsersName();
    return View(users);
    }
    [HttpGet("user")]
    public IActionResult User()
    {
        Random rand= new Random();
    List<User> users =UsersName();

        var user=users[rand.Next(0,users.Count)];

        return View(user);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
