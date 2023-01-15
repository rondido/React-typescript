

interface Person2{
    name:string;
    //있을수도있고 없을수도 있는 형태를 나타내는 것이 ?이다.
    age?:number;
}


function hello2(person:Person2):void{
    console.log(`안녕하세요 ${person.name}이다.`)
}


hello2({name:'mark',age: 29});
hello2({name:'Anna'});