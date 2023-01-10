function returnAny(message: any): any{
    console.log(message);
}

const any1 = returnAny('리턴은 아무거나');

//any타입이라 가능한 문법
any1.toString();



//개체 전파

let looselyTyped :any = {};

const d = looselyTyped.a.b.c.d;

function leakingAny(obj: any){
    const a:number = obj.num;
    const b = a + 1;
    return b; 
}

// c는 number가 되어서 나와야함
//누수를 막는 방법
const c = leakingAny({num:0});
c.indexOf('0');