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

class SuperNinja extends Ninja {
    constructor(name,health=200,speed=10,strength=10,wisdom='non'){
        super(name,health,speed,strength);
        this.wisdom=wisdom
    }
    speakWisdom(){
        const speak= super.drinkSake();
    }
}

const ninjaMan= new SuperNinja("master");
ninjaMan.speakWisdom();
ninjaMan.showStats();