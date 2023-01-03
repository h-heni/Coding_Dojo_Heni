using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ProductsandCategories.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Filters;
namespace ProductsandCategories.Controllers;

public class HomeController : Controller
{

    private MyContext _context;
    private readonly ILogger<HomeController> _logger;


    public HomeController(ILogger<HomeController> logger,MyContext context)
    {
        _logger = logger;
        _context = context;

    }


    public IActionResult Index()
    {
        ViewBag.AllProduct= _context.Products.ToList();

        return View("Index");
    }
    
    
    public IActionResult CreateProduct(Product newProduct)
    {
        _context.Add(newProduct);
        _context.SaveChanges();
        return RedirectToAction("Index");
    }
    [HttpGet("category")]
    public IActionResult Category()
    {
    ViewBag.AllCat= _context.Categories.ToList();

        return View();
    }
        public IActionResult CreateCategory(Category newCat)
    {
        _context.Add(newCat);
        _context.SaveChanges();
        return RedirectToAction("Category");
    }

    [HttpGet("Home/product/{ProductId}")]
    public IActionResult UpdateProd(int ProductId)
    {
        ViewBag.OneProdWithCategories = _context.Products.Include(p=>p.AssociationProduct).ThenInclude(a=>a.Category).FirstOrDefault(p => p.ProductId == ProductId);
        ViewBag.AllCat= _context.Categories.ToList();
        return View();

    }

    public void addCattoProd(int ProductId , Association newone)
    {
        newone.ProductId=ProductId;
        _context.Add(newone);
        _context.SaveChanges();

        Response.Redirect($"product/{ProductId}");
        
    }

    [HttpGet("categories/{CategoryId}")]
    public IActionResult UpdateCat(int CategoryId)
    {
        ViewBag.OneCat=_context.Categories.Include(c=>c.AssociationCategory).ThenInclude(c=>c.Product).FirstOrDefault(c=>c.CategoryId==CategoryId);
        ViewBag.AllProduct= _context.Products.ToList();
        return View();
    }

    [HttpPost("{CategoryId}")]
    public void Create(int CategoryId , Association newone)
    {
        newone.CategoryId=CategoryId;
        _context.Add(newone);
        _context.SaveChanges();
        Response.Redirect($"categories/{CategoryId}");
    }
    

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
