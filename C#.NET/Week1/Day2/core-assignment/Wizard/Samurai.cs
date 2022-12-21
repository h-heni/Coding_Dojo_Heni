class Samurai : Human 
{
    Samurai (string name) : base (name)
    {
        Health=200;
    }
    public override int Attack(Human target)
    {
        if (target.Health<50)
        {
            return target.Health=0;
        }
        return base.Attack(target);
    }
    public void Mediate ()
    {
        this.Health=Health;
    }
}