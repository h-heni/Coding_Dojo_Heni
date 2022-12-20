class Human 
{
    public string Name ;
    public int Strength;
    public int Intelligence;
    public int Dexterity;
    public int Health;

public Human (string name){
    Name=name;
    Strength=3;
    Intelligence=3;
    Dexterity=3;
    Health=100;
}
public Human (string name,int strength,int intelligence,int dexterity,int health){
    Name=name;
    Strength=strength;
    Intelligence=intelligence;
    Dexterity=dexterity;
    Health=health;
}

public int Attack (Human target){
    target.Health-=(3*this.Strength);
    return target.Health;
}
}
