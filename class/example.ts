
class Person{

    public readonly name:string = 'Park';
    private readonly country:string;

    public constructor(public _name:string, private age:number){
        this.country = 'Korea';
    }
    
    hello(){
    }
}

const p1:Person = new Person('mark',20);
console.log(p1.name); //get 을 하는 함수 getter
p1._name = "Hi"; //set 을 하는 함수 setter
console.log(p1.name); //get 을 하는 함수 getter


