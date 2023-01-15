interface Person3{
    name:string;
    age?:number;
    [index: string]:any; 
}

function hello3(person:Person3):void{
    console.log(`${person.name}`)
}


const p31:Person3 = {
    name:'Mark',
    age: 20,
};

const p32: Person3 = {
    name:"Anna",
    systers:['PArk','Chan'],
};

const p33:Person3 = {
    name:"bokdaengi",
    father:p31,
    mother:p32,
}

hello3(p31);
