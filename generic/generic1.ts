function helloString(message:string):string{
    return message;
}

function helloNumber(message:number):number{
    return message;
}

//더 많은 반복된 함수들...

function hello(message:any):any{
    return message;
}


console.log(hello('Park'));
console.log(hello(30));


function helloGeneric<T>(message:T):T{
    return message;
}

console.log(helloGeneric('Mark'));
console.log(helloGeneric(true));