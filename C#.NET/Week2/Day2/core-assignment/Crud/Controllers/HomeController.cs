using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Crud.Models;
#pragma warning disable CS8618

namespace Crud.Controllers;

public class HomeController : Controller
{
    private MyContext _context;
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger,MyContext context)
    {
        _logger = logger;
        _context = context;

    }
    //*************HOME
    public IActionResult Index()
    {
        IEnumerable<Dish> All=_context.Dishes.OrderByDescending(c=>c.CreatedAt);
        return View(All);
    }

    [HttpGet("dishes/new")]
    // ***************ADD
    public IActionResult AddDish()
    {
        return View();
    }
    [HttpPost("create")]
    public IActionResult Add( Dish create)
    {
        if(ModelState.IsValid){
            _context.Add(create);
            _context.SaveChanges();
        return RedirectToAction("Index");

        }
        return View("AddDish");
    }
    // ***************SHOW
    [HttpGet("dishes/{DishId}")]
    public IActionResult Show( int DishId)
    {
        Dish ? Showplate= _context.Dishes.FirstOrDefault(p=>p.DishId==DishId);

        return View(Showplate);
    }

    // **************Edit
    [HttpGet("dishes/{DishId}/edit")]
    public IActionResult Edit (int DishId)
    {
        Dish ? showone=_context.Dishes.FirstOrDefault(p=>p.DishId==DishId);
        return View(showone);
    }

    [HttpPost("dishes/{DishId}/edit")]
    public IActionResult Update(Dish newone, int DishId)
    {
        Dish ? oldPlate=_context.Dishes.FirstOrDefault(p=>p.DishId==newone.DishId);
        if(ModelState.IsValid)
        {
            oldPlate.Chef=newone.Chef;
            oldPlate.Name=newone.Name;
            oldPlate.Calories=newone.Calories;
            oldPlate.Tastiness=newone.Tastiness;
            oldPlate.Description=newone.Description;
            _context.SaveChanges();
            return RedirectToAction("Index");

            
        }
        return View ("Edit",newone);
    }
    // *****************Delete
    [HttpGet("delete/{DishId}")]
    public IActionResult Delete (int DishId)
    {
        Dish? ToDelete=_context.Dishes.SingleOrDefault(s=>s.DishId==DishId);
        _context.Remove(ToDelete);
        _context.SaveChanges();
        return RedirectToAction("Index");
    }



    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
