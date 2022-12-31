using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ChefAndDishes.Models;
using Microsoft.EntityFrameworkCore;
namespace ChefAndDishes.Controllers;

public class HomeController : Controller
{
    private MyContext _context;
    private readonly ILogger<HomeController> _logger;


    public HomeController(ILogger<HomeController> logger,MyContext context)
    {
        _logger = logger;
        _context = context;

    }
    [HttpGet("")]
    public IActionResult Index()
    {
        ViewBag.Chef=_context.Chef
        .Include(c => c.CreatedDishes).ToList();
        return View();
    }
    [HttpGet("dishes")]
    public IActionResult ShowDishes()
    {
        List<Dish> all = _context.Dish.Include(d=>d.Creator).ToList();
        return View(all);
    }
    [HttpGet("dish/new")]
    public IActionResult AddDish()
    {

        ViewBag.one=_context.Chef
        .Include(c => c.CreatedDishes).ToList();
        return View();
    }
    [HttpGet("chef/new")]
    public IActionResult AddChef()
    {
        return View();
    }


    public IActionResult CreateChef(Chef newchef)
    {
        _context.Add(newchef);
        _context.SaveChanges();
        return RedirectToAction("Index");
    }
    public IActionResult CreateDish(Dish newDish)
    {
        _context.Add(newDish);
        _context.SaveChanges();
        return RedirectToAction("ShowDishes");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
