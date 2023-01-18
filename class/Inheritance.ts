class Parent{
    constructor(protected _name: string, private _age:number){

    }
    public print() : void{
        console.log(`이름은 ${this._name} 이고, 나이는 ${this._age}입니다.`);
    }
    protected printName():void{
        console.log(this._name, this._age);
    }
}

// const pe = new Parent('Park',30);
// pe.print();

class Child extends Parent{
    //override
    
    public gender = 'male';

    constructor(age:number){
        //부모 생성자 호출
        super('Park jr',age);  
        this.printName();              
    }
}

const c = new Child(1);

c.print();