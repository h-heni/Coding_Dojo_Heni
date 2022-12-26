public class Master : Hunter
{
    public Character HiddenType {get;set;}
    public Master (string name, int age,Master hd) : base (name,age)
    {
        HiddenType=hd;
    }
}