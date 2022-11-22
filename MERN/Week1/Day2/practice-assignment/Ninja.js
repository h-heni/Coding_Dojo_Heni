class Ninja {
    constructor(name,health=0,speed=3,strength=3){

    this.name=name;
    this.health=health;
    this.speed=speed;
    this.strength=strength;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(this.name,this.health,this.speed,this.strength);
    }
    drinkSake(){
        this.health+=10;
        console.log(this.health);
    }
}

const iheb=new Ninja("iheb")
iheb.sayName()
iheb.showStats()
iheb.drinkSake()
iheb.showStats()