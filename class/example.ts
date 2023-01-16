
class Person{

    public name:string = "Mark";
    private age!:number;
    
    //값을 할당해주거나 contructor를 사용해야함
    //!를 사용할때는 p1.age처럼 할당해주어야함..
    //밑에서 constructor를 사용하였기때문에 age에서 !를 빼도 무방하다
    public constructor(age?:number){
        if(age === undefined){
            this.age = 20;
        }else{
            this.age = age;
        }        
    }

    public async init(){

    }
}

const p1:Person = new Person(20);
console.log(p1);
