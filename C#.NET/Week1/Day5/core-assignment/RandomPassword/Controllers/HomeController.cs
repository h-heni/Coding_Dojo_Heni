using System.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RandomPassword.Models;

namespace RandomPassword.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }
    private static Random random = new Random();

    public static string RandomString(int length)
{
    const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return new string(Enumerable.Repeat(chars, length)
        .Select(s => s[random.Next(s.Length)]).ToArray());
}
    public IActionResult Index(Generator Newcode)
    {
        HttpContext.Session.SetString("Random", RandomString(14));
        return View(Newcode);
    }
    [HttpPost("generate")]
    public IActionResult Generate(Generator Newcode)
    {
        static int count(int code){
            return code+=1;
        }
        Newcode.code=RandomString(14);
        Newcode.count=count(Newcode.count);
        HttpContext.Session.SetInt32("Count",Newcode.count);
        return RedirectToAction("Index",Newcode);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
