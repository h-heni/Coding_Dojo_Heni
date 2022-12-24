using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using DojoQurveyWithModel.Models;

namespace DojoQurveyWithModel.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }
    [HttpGet("")]
    public IActionResult Index()
    {
        return View();
    }
    [HttpPost("survey")]
    public IActionResult Result (Survey yourSurvey)
{
    Console.WriteLine(yourSurvey);
    List<Survey> sur = new List<Survey>();

    sur.Add(yourSurvey);
    return View("Result",sur);
}


    
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
