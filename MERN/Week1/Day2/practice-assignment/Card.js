class Card {
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }
}

class Unit extends Card {
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.res=res;
    }
    attack(target){
        target.res=target.res-this.power
        console.log(target.res);
    }

}

class Effect extends Card {
    constructor(name,cost,text,stat,mognitude){
        super(name,cost);
        this.text=text;
        this.stat=stat;
        this.mognitude=mognitude
    }
    actionOnRes(target){
            target.res+=this.mognitude
            console.log(target.res);
            
    }
    actionOnPower(target){
            target.power+=this.mognitude
            console.log(target.power);
            
    

    }
    play( target ) {
        if( target instanceof Unit ) {
            console.log(this.text);
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const red = new Unit ('Red Belt Ninja',3,3,4)
const black = new Unit ('Black Belt Ninja',4,5,4)
const hard = new Effect ('Hard Algorithm',2,"increase target's resilience by 3","resilience",3)
const unhandled = new Effect ('Unhandled Promise Rejection',1,"reduce target's resilience by 2","resilience",-2)
const pair = new Effect ('Pair Programming',3,"increase target's power by 2","power",2)

hard.actionOnRes(red)
hard.play(red)
unhandled.actionOnRes(red)
unhandled.play(red)
pair.actionOnPower(red)
pair.play(red)
black.attack(red)
