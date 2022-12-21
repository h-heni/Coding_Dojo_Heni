public class Wizard :  Human 
{
    public Wizard(string name): base(name)
    {
        Health=50;
        Intelligence=25;
    }
    public override int Attack (Human target)
    {
    target.Health-=(3*this.Intelligence);
    this.Health+=(3*this.Intelligence);
    return target.Health;
    } 
    void Heal (Human target)
    {
        target.Health=(3*this.Intelligence);
    }
}