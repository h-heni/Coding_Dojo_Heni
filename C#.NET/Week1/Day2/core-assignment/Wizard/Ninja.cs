class Ninja : Human
{
    Ninja (string name) : base (name)
    {
        Dexterity=75;
    }

    public override int Attack(Human target)
    {
        Random rand=new Random ();
        int odd =rand.Next(0,101);
		
		if (odd>80)
		{ 
        return target.Health-= this.Dexterity+10;
		}
		else return target.Health-= this.Dexterity;
    }
    public void Steal (Human target)
    {
        target.Health-=5;
        this.Health+=5;
    }
}
