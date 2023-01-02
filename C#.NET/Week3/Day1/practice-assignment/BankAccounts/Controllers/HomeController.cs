
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using BankAccounts.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Identity;

namespace BankAccounts.Controllers;

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
        return View();
    }
    [HttpPost]
    public IActionResult Register(Register newReg)
    {
        if(ModelState.IsValid){
            PasswordHasher<Register> Hasher = new PasswordHasher<Register>();
            newReg.Password = Hasher.HashPassword(newReg, newReg.Password);
            _context.Add(newReg);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        return View("Index");
    }

    [HttpPost]
    public IActionResult Login(Login newLog)
    {
        if (ModelState.IsValid){
            var UserInDb= _context.Users.FirstOrDefault(u=>u.Email==newLog.LogEmail);
            if (UserInDb==null){
                ModelState.AddModelError("LoEmail","Invalid Email");
                return View("Index");
            }
            else{
            var hasher=new PasswordHasher<Login>();
            var result= hasher.VerifyHashedPassword(newLog, UserInDb.Password ,newLog.LogPassword);
            if(result==0){
                ModelState.AddModelError("LoPassword","Wrong Password");
                return View("Index");
            } 
            HttpContext.Session.SetInt32("RegisterId",UserInDb.RegisterId);
            HttpContext.Session.SetString("RegisterName",UserInDb.FirstName);

            return RedirectToAction("Privacy");
            }
            
        } else {

        return View("Index");
        }

    }
    public IActionResult Privacy()
    {
        ViewBag.RegisterId=HttpContext.Session.GetInt32("RegisterId");
        ViewBag.Amount=_context.Transactions.Where(u=>u.RegisterId==HttpContext.Session.GetInt32("RegisterId")).Sum(i=>i.Amount);
        ViewBag.Alltr=_context.Transactions.ToList();
        return View();
    }
    public IActionResult AddTransaction(int RegisterId,Transaction newTransaction)
    {
        newTransaction.RegisterId=RegisterId;
        _context.Add(newTransaction);
        _context.SaveChanges();
        return RedirectToAction("Privacy");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
