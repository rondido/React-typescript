declare const maybe: unknown;


//언노운은 number에 바로 할당 할 수 없다.
const aNumber: number = maybe;

if (maybe === true){
    const aBoolean:boolean = maybe;
    //maybe boolean true이기때문에 string에는 넣을 수 없다.
    //const aString:string = maybe;
}

//여기서 string으로 비교하면 maybe if문 안에서는string으로 규정됨.
//타입 가드
if(typeof maybe === 'string'){
    const aString:string = maybe;
    
    //const aBoolean:boolean = maybe;
}


