abstract public class Character
{
    public string Name { get; set; }
    public int Age { get; set; }
    public double Power { get; set; }
    public double Health { get; set; }
    public double Strength { get; set; }



    public Character(string name, int age)
    {
        Name = name;
        Age = age;
        Power = 0.5;
        Health = 0.5;
        Strength = 0.5;
    }

    public virtual void Attack (Character target)
    {
        target.Health -=0.1;
    }
}