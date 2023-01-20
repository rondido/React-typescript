interface IPerson1{
    name: string;
    age?:number;
    hello(): void;
}

class Person implements IPerson1{
    name:string;
    age?: number | undefined;
    constructor(name:string){
        this.name = name;
    }
    hello():void{
        console.log(`안녕하세요 ${this.name}`);
    }
}


const person:IPerson1 = new Person('mark');
person.hello();
