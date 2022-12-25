using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Form.Models;

namespace Form.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }
    [HttpPost]
    public IActionResult Create(User form)
    {
        if (ModelState.IsValid){

        List<User> newone = new List<User>();
        newone.Add(form);
        return RedirectToAction("Success",newone);
        }
        else {
            return View("Index");
        }
    }
    [HttpGet("success")]
    public IActionResult Success()
    {
        return View();
    }


    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
