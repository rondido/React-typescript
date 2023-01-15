interface HelloPerson{
    (name:string, age?:number): void;
}

const helloPerson: HelloPerson = function(name:string, age:number){
    console.log(`안녕하세요! ${name}`);
};

helloPerson('park', 30);