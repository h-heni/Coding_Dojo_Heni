using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using LogAndRegistration.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Identity;

namespace LogAndRegistration.Controllers;

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
    public IActionResult Login(LoginUser newLog)
    {
        if (ModelState.IsValid){
            var UserInDb= _context.Users.FirstOrDefault(u=>u.Email==newLog.LogEmail);
            if (UserInDb==null){
                ModelState.AddModelError("LoEmail","Invalid Email");
                return View("Index");
            }
            else{
            var hasher=new PasswordHasher<LoginUser>();
            var result= hasher.VerifyHashedPassword(newLog, UserInDb.Password ,newLog.LogPassword);
            if(result==0){
                ModelState.AddModelError("LoPassword","Wrong Password");
                return View("Index");
            } 
            HttpContext.Session.SetInt32("UserId",UserInDb.UserId);

            return RedirectToAction("Success");
            }
            
        } else {

        return View("Index");
        }
    }
    public IActionResult Logout ()
    {
        HttpContext.Session.Clear();
        return RedirectToAction("Index");
    }
    [SessionChek]
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

public class SessionChekAttribute : ActionFilterAttribute
{
    public override void OnActionExecuted(ActionExecutedContext context)
    {
        int ? UserId =context.HttpContext.Session.GetInt32("UserId");
        if (UserId ==null)
        {
            context.Result = new RedirectToActionResult("Index","Home",null);
        }
    }
}