public class Fighter: Hunter
{
    public double skills {get;set;}
    public Fighter (string name ,int age,double s): base (name,age)
    {
        skills=s;
    }
}