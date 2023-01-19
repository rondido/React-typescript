//가장 기초적인 제네릭
function helloBasic<T,U>(message:T,comment:U):T{
    return message;
}

//제한 String이외의 타입이 들어가면 에러 발생
helloBasic<string,number>("Mark",123);
//추론
helloBasic(30,30);