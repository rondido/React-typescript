const a:number = 39;

const hello = () =>{
    
}
// noImplicitThis
function noImplicitThisTestFunc(this,name:string,age:number){
    this.name = name;
    this.age = age;
    return this;
}


console.log(noImplicitThisTestFunc.call({height:160},'Mark',36));
console.log(noImplicitThisTestFunc.apply({height:170},'Mark',36));
console.log(noImplicitThisTestFunc.bind({height:180},'Mark',36));


class noImplicitThisTestClass{
    private _name:string;
    private _age:number;
    constructor(name:string,age:number){
        this._name =name;
        this._age =age;
    }
    public print(this:noImplicitThisTestClass){
        console.log(this._name,this._age);
    }

}

new noImplicitThisTestClass('Mark',36).print();



//stictNullChecks

const a: number = null;
const b: string = undefined;
const c: number | null = null;
const d : any = null;
const e: any = undefined;
const f: void = undefined;


const button = document.querySelector('#id') as HTMLButtonElement;

button.addEventListener('keydown', (e:MouseEvent) => {});


class Person{
    private _name!:string;
    private _age!:number;

    public async initialize(name:string,age:number){
        this._name = name;
        this._age  = age;
    }

    public print(){
        console.log(this._name, this._age);
    }
}