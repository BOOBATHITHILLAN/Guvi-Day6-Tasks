class Person{
    constructor(Name,Age,District){
        this.Name=Name;
        this.Age=Age;
        this.District=District;            
    }
    IntroduceMySelf(){
        console.log(`Hi Guvi, I am ${this.Name} from ${this.District} district. I am ${this.Age} years old` )
    }
}
let Obj1=new Person("Boobathi",26,"Dindigul");
Obj1.IntroduceMySelf();