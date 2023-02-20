# 함수

## 함수 매개변수

다음 sing 함수는 song 매개변수를 받아 콘솔에 출력

```jsx
function sing(song) {
  console.log(`singing:${song}`);
}
```

sing 함수를 작성한 개발자가 song 매개변수를 제공하기 위해 의도한 값의 타입은 무엇일까요?

명시적 타입 정보가 선언되지 않으면 절대 타입을 알 수 없다. 타입스크립트가 이를 any타입으로 간주하여 매개변수의 타입은 무엇이든 뵐 수 있다.

변수와 마찬가지로 타입스크립트를 사용하면 타입 애너테이션으로 함수 매개변수의 타입을 선언할 수 있다. 다음과 같이:string을 사용해 song 매개변수가 string 타입임을 타입스크립트에 알립니다.

```jsx
function sing(song: string) {
  console.log(`Singing:${song}`);
}
```

훨씬 더 좋다. 이제 song이 어떤 타입인지 알 수 있습니다.

코드를 유효한 타입스크립트 구문으로 만들기 위해 함수 매개변수에 적절한 타입 애너테이션을 추가할 필요는 없다. 타입스크립트는 타입 오류로 오류를 계속 알리지만, 이미 시작된 자바스크립트는 계속 실행된다.앞서 song 매개변수에 타입 선언이 누락된 코드 스니펫은 여전히 타입스크립트에서 자바스크립트로 변환됨.

## 필수 매개변수

자바스크립트에서는 인수의 수와 상관없이 함수를 호출할 수 있다. 하지만 타입스크립트는 함수에 선언된 모든 매개변수가 필수라고 가정합니다. 함수 잘못된 수의 인수로 호출되면, 타입스크립트는 타입 오류의 형태로 이의를 제기합니다. 함수가 너무 적거나 많은 인수로 호출되면 타입스크립트는 인수의 개수를 계산함.

```jsx
function singTow(first: string, second: string) {
  console.log(`${first}/${second}`);
}
//Logs:"Ball and chain / undefined"
singTow("Ball and chain");
//-----------------
//Error: Expected 2 arguments, but got 1.

//Log:"I / Love"
singTow("I", "Love"); //ok
//Logs:"Go / The"
singTow("Go", "The", "Do");
//--

//Error:Expected 2 arguments, but got 3.(2554)
```

함수에 필수 매개변수를 제공하도록 강제하면 예상되는 모든 인숫값을 함수 내에 존재하도록 만들어 타입 안전성을 강화하는 데 도움이 됨. 모든 인숫값이 존재하는지 확인하지 못하면 이전 singingTow 함수가 undefined를 로그로 남기거나 인수를 무시하는 것과 같이 코드에서 예기치 않은 동작이 발생함.

<aside>
💡 매개변수는 인수로 받을 것으로 예상되는 함수의 선언을 나타냄. 인수는 함수를 호출할 때 매개변수에 제공되는 값을 나타냄. 이전 예제에서 first와 second는 매개변수이고 “Do”와 같은 문자열은 인수임.

</aside>

### 선택적 매개변수

자바스크립트에서 함수 매개변수가 제공되지 않으면 함수 내부의 인숫값은 undefiend으로 기본값이 설정되는 것을 떠올려보세요. 때로는 함수 매개변수를 제공할 필요가 없을 때도 있고, undefined 값을 위해 의도적으로 사용할 수 도 있다. 우리는 타입스크립트가 이러한 선택적 매개변수에 인수를 제공하지 못하는 경우, 타입 오류를 보고하지 않았으면 함. 타입스크립트에서는 인수를 제공하지 못하는 경우, 타입 오류를 보고하지 않았으면 함. 타입스크립트에서는 선택적 객체 타입 속성과 유사하게 타입 애너테이션의 : 앞에 ?를 추가해 매개변수가 선택적으로 표시함.

함수 호출에 선택적 매개변수를 제공할 필요는 없다. 선택적 매개변수에는 항상 | undefined가 유니언 타입으로 추가되어 있다.

다음 announceSong 함수에서 singer 매개변수는 선택 사항으로 표시됨. 타입은 string | undefined이며 함수 호출자가 singer 매개변수를 위한 인수를 제공할 필요가 없다.

만일 singer가 제공되면, string 값이 거나 undefined일 수 있다.

```jsx
function announceSong(song: string, singer?: string) {
  console.log(`Song:${song}`);
  if (singer) {
    console.log("Singer:${singer}");
  }
}

announceSong("Gee"); //ok
announceSong("Gee", undefined); //ok
announceSong("gee", "Sia"); //ok
```

이러한 선택적 매개변수는 항상 암묵적으로 undefined가 될 수 있다. 이전 코드에서 singer는 string | undefiend 타입으로 시작한 후 if문에 따라 string타입으로 좁혀진다.

선택적 매개변수는 | undefined를 포함하는 유니언 타입 매개변수와는 다릅니다. ?으로 표시된 선택적 변수가 아닌 매개변수는 값이 명시적으로 undefined일지라도 항상 제공되어야 함.

announceSongBy 함수의 매개변수는 명시적으로 제공되어야 함. singer는 string 값이거나 undefined가 될 수 있다.

```jsx
function announceSongBy(song: string, singer: string | undefined) {
  console.log(`Song:${song}`);
  if (singer) {
    console.log("Singer:${singer}");
  }
}

announceSongBy("Geen");

//Expected 2 arguments, but got 1.(2554)

announceSongBy("Geen", undefined); //ok
announceSongBy("Chan", "Sia");
```

함수에서 사용되는 모든 선택적 매개변수는 마지막 매개변수여야 함. 필수 매개변수 전에 선택적 매개변수를 위치시키면 다음과 같이 타입스크립트 구문 오류가 발생

```jsx
function announceSongBy(singer?: string, song: string) {
  console.log(`Song:${song}`);
  if (singer) {
    console.log("Singer:${singer}");
  }
}
//
//ERror:A required parameter cannot follow an optional parameter
```

### 기본 매개변수

자바스크립트에서 선택적 매개변수를 선언할 때 =와 같이 포함된 기본값을 제공할 수 있습니다. 즉. 선택적 매개변수에는 기본적으로 값이 제공되기 때문에 해당 타입스크립트 타입에는 암묵적으로 함수 내부에 | undefined 유니언 타입이 추가됨. 타입스크립트는 함수의 매개변수에 대해 인수를 누락하거나 undefined 인수를 사용해서 호출하는 것을 여전히 허용함.

타입스크립트의 타입 추론은 초기 변숫값과 마찬가지로 기본 함수 매개변수에 대해서도 유사하게 작동함. 매개변수에 기본값이 있고 타입 애너테이션이 없는 경우, 타입스크립트는 해당 기본값을 기반으로 매개변수 타입을 유추함.

다음 rateSong 함수에서 rating은 number 타입으로 유추되지만, 함수를 호출하는 코드에서는 선택적 number | undefined가 됨.

```jsx
function rateSong(song: string, rating = 0) {
  console.log(`${song}:get ${rating}/5 starts`);
}

rateSong("Photo"); //ok
rateSong("Set Fire to The rain", 5); //ok
rateSong("Set fire to the rain", undefined); //ok

rateSong("At Lost", "100");
//eror:Argument of type 'string' is not assignable to parameter of type 'number'.
```

### 나머지 매개변수

자바스크립트의 일부 함수는 임의의 수의 인수로 호출할 수 있도록 만들어짐, … 스프레드 연산자는 함수 선언의 마지막 매개변수에 위치하고, 해당 매개변수에서 시작해 함수에 전달된 나머지 인수가 모두 단일 배열에 저장되어야 함을 나타냄.

타입스크립트는 이러한 나머지 매개변수의 타입을 일반 매개변수와 유사하게 선언할 수 있다. 단, 인수 배열을 나타내기 위해 끝에 [] 구문이 추가된다는 점만 다르다.

다음 singAllTheSongs는 songs나머지 매개변수에 대해 0개 이상의 string 타입 인수를 사용할 수 있다.

```jsx
function singAllTheSongs(singer: string, ...songs: string[]) {
  for (const song of songs) {
    console.log(`${song},by ${singer}`);
  }
}

singAllTheSongs("keys"); //ok
singAllTheSongs("Gaga", "Bad", "just", "poker face"); //ok
singAllTheSongs("keys", 2000); //ok

//error:Argument of type 'number' is not assignable to parameter of type 'string'.
```

### 반환 타입

타입스크립트는 지각적입니다. 함수가 반환할 수 있는 가능한 모든 값을 이해하면 함수가 반환하는 타입을 알 수 있다. 이번 예제에서 singSongs는 타입스크립트에서 number를 반환하는 것으로 파악됨.

```jsx
function singSong(songs: string[]) {
  for (const song of songs) {
    console.log(`${song}`);
  }
  return songs.length;
}
```

함수에 다른 값을 가진 여러 개의 반환문을 포함하고 있다면, 타입스크립트는 반환 타입을 가능한 모든 반환 타입의 조합으로 유추됨.

다음 코드에서 getSongAt 함수는 string | undefined를 반환하는 것으로 유추됨. 두가지 가능한 반환 값이 각각 string과 undefiend이기 때문임.

```jsx
function getSongAt(songs: string[], index: number) {
  return index < songs.length ? songs[index] : undefined;
}
```
## 명시적 반환 타입

변수와 마찬가지로 타입 애너테이션을 사용해 함수의 반환 타입을 명시적으로 선언하지 않는 것이 좋다. 그러나 특히 함수에서 반환 타입을 명시적으로 선언하는 방식이 매우 유용할때가 종종 있다.

- 가능한 반환값이 많은 함수가 항상 동일한 타입의 값을 반환하도록 강제합니다.
- 타입스크립트는 재귀 함수의 반환 타입을 통해 타입을 유추하는 것을 거부함.
- 수백 개이상의 타입스크립트파일이있는 매우 큰 프로젝트에서 타입스크립트 타입 검사 속도를 높일 수 있다.

함수 선언 반환 타입 애너테이션은 매개변수 목록이 끝나는 `)`다음에 배치됨. 함수 선언의 경우는 `{` 앞에 배치댐.

```jsx
function singSongsRecursive(songs:string[],count = 0):number{
    return songs.length? singSongsRecursive(songs.slice(1),count + 1):count;
}
```

화살표 함수의 경우 ⇒ 앞에 배치됨.

```jsx
const singSongsRecursive = (songs:string[],count = 0):number =>
     songs.length? singSongsRecursive(songs.slice(1),count + 1):count;
```

함수의 변환문이 함수의 반환 타입으로 할당할 수 없는 값을 반환하는 경우 타입스크립트는 할당 가능성 오류를 표시함.

다음 getSongRecordingDate 함수는Date | undefined를 반환하도록 명시적으로 선언되었지만, 반환문 중 하나가 string을 반환하도록 잘못 제공하고 있습니다.

```jsx
function getSongRecordingDate(song:string): Date | undefined{
    switch(song){
        case"Strange Fruit":
            return new Date("April 20,1939");

        case"Greensleeves":
            return "unknown";
            //Error:Type 'string' is not assignable to type 'Date'.(2322)
        default:
            return undefined;
    }
}
```

## 함수 타입

자바스크립트에서는 함수를 값으로 전달할 수 있다. 즉, 함수를 가지기 위한 매개변수 또는 변수의 타입을 선언하는 방법이 필요합니다.

함수 타입 구문은 화살표 함수와 유사하지만 함수 본문 대신 타입이 있다.

다음 nothingInGivesString 변수 타입은 매개변수가 없고 string 타입을 반환하는 함수임을 설명합니다.

```jsx
let nothingInGivesString: () => string;
```

다음 inputAndOutput 변수 타입은 string[] 매개변수와 count 선택적 매개변수 및 number값을 반환하는 함수임을 설명합니다. 

```jsx
let inputAndOutput:(input:string[], output?:number) => number;
```

함수 타입은 콜백 매개변수(함수로 호출되는 매개변수)를 설명하는 데 자주 사용합니다.

예를 들어 다음 runOnSongs 함수는 getSongAt 매개변수의 타입을index:number를 받고 string을 반환하는 함수로 선언했습니다. getSongAt을 전달하면 해당 타입과 일치하지만, logSong은 매개변수로 number 대신 string을 사용하므로 반환값을 가져오는데 실패합니다.

```jsx
const songs = ["juice", "Shake it Off","what's up"];

function runOnSongs(getSongAt:(index:number)=>string){
    for(let i =0; i<songs.length; i+= 1){
        console.log(getSongAt(i));
    }
}

function getSongAt(index:number){
    return `${songs[index]}`;
}
runOnSongs(getSongAt); // ok

function logSong(song:string){
    return `${song}`;
}
runOnSongs(logSong);

//Error:let inputAndOutput:(input:string[], output?:number) => number;
//Types of parameters 'song' and 'index' are incompatible.
//Type 'number' is not assignable to type 'string'.
```

runOnSongs(logSong)에 대한 오류 메시지는 할당 가능성 오류의 예로 몇 가지 상세한 단계까지 제공합니다. 두 함수를 서로 할당할 수 없다는 오류를 출력할 때 타입스크립트는 일반적으로 세 가지 상세한 단계를 제공합니다. 각 단계는 다음과 같이 점점 자세한 내용을 담고 있습니다.

1. 첫번째 들여쓰기 단계는 두 함수 타입을 출력합니다.
2. 다음 들여쓰기 단계는 일치하지 않는 부분을 저장합니다.
3. 마지막 들여쓰기 단계는 일치하지 않는 부분에 대한 정확한 할당 가능성 오류를 출력합니다.

이전 코드 스니펫에서 단계별로 제공하는 내용을 다음과 같다.

1. logsongs:(song:string) ⇒ string은 getSongAt:(index:number) ⇒ string에 할당되도록 제공된 타입입니다.
2. logSongs의 song 매개변수는 getSongAt의 index 매개변수로 할당된다.
3. song의 string 타입은 index의 number 타입에 할당할 수 없다.

<aside>
💡 타입스크립트에서 여러 줄로 나타나는 오류가 처음에 어려워보일 수 있다. 차근차근 한줄씩읽으며 각 부분이 전달하는 내용을 이해하면 점차 오류를 이해하게 될 겁니다.

</aside>

### 함수 타입 괄호

함수 타입은 다른 타입 사용되는 모든 곳에 배치할 수 있다. 여기에는 유니언 타입도 포함됩니다.

유니언 타입의 애너테이션에서 함수 변환 위치를 나타내거나 유니언 타입을 감싸는 부분을 표시할 때 괄호를 사용합니다.

```jsx
//타입은 string | undefined 유니언을 반환하는 함수
let returnStringOrUndefined: () => string | undefined;

//타입은 undefined나 string을 반환하는 함수
let maybeReturnString: (()=>string) | undefined;
```

### 매개변수 타입 추론

매개변수로 사용되는 인라인 함수를 포함하여 작성한 모든 함수에 대해 매개변수를 선언해야 한다면 번거로울 것이다. 다행히도 타입스크립트는 선언된 타입의 위치에 제공된 함수의 매개변수 타입을 유추할 수 있다.

다음 singer 변수는 string 타입의 매개변수를 갖는 함수로 알려져 있으므로 나중에 singer가 할당되는 함수 내의 song 매개변수는 string으로 예측됩니다.

```jsx
let singer:(song:string)=>string;
singer = function(song){
    //song:string의 타입
    return `Singing:${song.toUpperCase()}`;//ok
}
```

함수를 매개변수로 갖는 함수에 인수로 전달된 함수는 해당 매개변수 타입도 잘 유추할 수 있습니다.

예를 들어 다음 song과 index 매개변수는 타입스크립트에 따라 각각 string과number로 유추됨.

```jsx
const songs = ["Call me","Jolene","The Chain"];
songs.forEach((song,index)=>{
    console.log(`${song} is at index${index}`)
})
```

### 함수 타입 별칭

3장 유니언과 리터럴에서 다룬 타입 별칭을 기억하시나요? 함수 타입에서도 동일하게 별칭을 사용할 수 있다.

다음 StringToNumber 타입은 string 타입을 받고 number 타입을 반환하는 함수의 별칭을 지정함. 별칭은 이후 변수 타입을 설명하는 사용함.

```jsx
type StringToNumber = (input:string) => number;
let stringToNumber: StringToNumber;
stringToNumber = (input) => input.length; //ok
stringToNumber = (input) => input.toUpperCase();
//Type 'string' is not assignable to type 'number'.(2322)
```

비슷하게 함수 매개변수도 함수 타입을 참조하는 별칭을 입력할 수 있다. 다음 useNumberToString 함수는 함수 타입 별칭인 NumberToString의 단일 매개변수를 갖습니다.

```jsx
type NumberToString = (input:number)=>string;

function useNumberToString(NumberToString:NumberToString){
    console.log(`The string is: ${NumberToString(2134)}`);
}

useNumberToString((input)=> `${input}! Hooray`);
useNumberToString((input)=>input * 2);
//Type 'number' is not assignable to type 'string'.(2322)
```

타입 별칭은 특히 함수 타입에 유용합니다. 타입 별칭을 이용하면 반복적으로 작성하는 매개변수와 반환 타입을 갖는 코드 공간을 많이 절약할 수 있다.

## 그 외 반환 타입

지금부터 void와 never, 두 반환 타입에 대해 알아보자.

### void 반환 타입

일부 함수는 어떤 값도 반환하지 않는다. 예를 들면 return 문이 없는 함수이거나 값을 반환하지 않는 return문을 가진 함수일 경우. 타입스크립트는 void 키워드를 사용해 반환값이 없는 함수의 반환 타입을 확인할 수 있다.

반환 타입이 void인 함수는 값을 반환하지 않을 수 있다. 다음 longSong 함수는 void를 변환하도록 선언되었으므로 값 반환을 허용하지 않는다.

```jsx
function logSong(song:string | undefined):void{
    if(!song){
        return; //ok
    }
    console.log(`${song}`);

    return true;
    //Type 'boolean' is not assignable to type 'void'.(2322)

}
```

함수 타입 선언 시 void 반환 타입은 매우 유용합니다. 함수 타입을 선언할 때 void를 사용하면 함수에서 반환되는 모든 값은 무시됨.

예를 들어 다음 songLogger 변수는 song:string을 받고, 값을 반환하지 않는 함수

```jsx
let songLogger:(song:string)=>void;
songLogger = (song)=>{
    console.log(`${song}`);
}

songLogger("Heart of Glass");
```

자바스크립트 함수는 실제값이 반환되지 않으면 기본으로 모두 undefined를 반환하지만 void는 undefned와 동일하지 않습니다. void는 함수의 변환 타입이 무시된다는 것을 의미하고 undefined는 반환되는 리터럴 값임. undefined를 포함하는 대신 void 타입의 값을 할당하려고 하면 타입 오류가 발생함.

```jsx
function returnVoid(){
    return;
}
let lazyValue:string | undefined;

lazyValue = returnVoid();
//Type 'void' is not assignable to type 'string | undefined'.(2322)
```

undefined와 void를 구분해서 사용하면 매우 유용함.  특히 void를 반환하도록 선언된 타입 위치에 전달된 함수가 변환된 모든 값을 무시하도록 설정할 때 유용

예를 들어 배열의 내장 forEach 메서드는 void를 반환하는 콜백을 받습니다. forEach에 제공되는 함수는 원하는 모든 값을 반환 할 수 있다. 다음 saveRecords 함수의 records.push(record)는 number(배열의 .push()에서 반횐된 값)을 반환하지만,여전히 newRecords.forEach에 전달된 화살표 함수에 대한 반환값이 허용됨.

```jsx
const records:string[] = [];

function saveRecords(newRecords:string[]){
    newRecords.forEach(record => records.push(record));
}
saveRecords(['21','Come on over', 'The Body'])
```

void 타입은 자바스크립트가 아닌 함수의 반환 타입을 선언하는 데 사용하는 타입스크립트 키워드임. void 타입은 함수의 반환값이 자체적으로 변환될 수 있는 값도 아니고, 사용하기 위한 것도 아니라는 표시임을 기억하세요.

## nerver 반환 타입

일부 함수는 값을 변환하지 않을 뿐만 아니라 반환할 생각도 전혀 없습니다. never 반환 함수는 (의도적으로) 항상 오류를 발생시키거나 무한 루프를 실행하는 함수임.

함수가 절대 반환하지 않도록 의도하려면 명시적:never 타입 애너테이션을 추가해 해당 함수를 호출한 후 모든 코드가 실행되지 않음을 나타냄. 다음 fail 함수는 오류만 발생시키므로 param의 타입을 string으로 좁혀서 타입스크립트의 제어 흐름 분석을 도와줌.

```jsx
function fail(message:string):never{
    throw new Error('Invariant failure:${message}.');
}

function worldWithUnsafeParam(param:unknown){
    if(typeof param !=="string"){
        fail(`param should be a string, not${typeof param}`);
    }
    param.toUpperCase();
}
```

<aside>
💡 never는 void와는 다릅니다. void는 아무것도 반환하지 않는 함수를 위한 것이고, never는 절대 반환하지 않는 함수를 위한 것.

</aside>

## 함수 오버로드

일부 자바스크립트 함수는 선택적 매개변수와 나머지 매개변수만으로 표현할 수 없는 매우 다른 매개변수들로 호출될 수 있다. 이러한 함수는 오버로드 시그니처라고 불리는 타입스크립트 구문으로 설명할 수 있다. 즉, 하나의 최종 구현 시그니처와 그 함수의 본문앞에 서로 다른 버전의 함수 이름, 매개변수, 반환 타입을 여러 번 선언합니다.

오버로드된 함수 호출에 대해 구문 오류를 생성할지 여부를 결정할 때 타입스크립트는 함수의 오버로드 시그니처면 확인합니다. 구현 시그니처는 함수의 내부 로직에서만 사용됩니다.

다음 createDate 함수는 1개의 timestamp 매개변수 또는 3개의 매개변수(month, day, year)를 사용해 호출함. 허용된 수의 인수를 사용해 호출할 수 있지만 2개의 인수를 사용해 호출하면 2개의 인수를 허용하는 오버로드 시그니처가 없기 때문에 타입 오류가 발생합니다.

다음 예제의 처음 두 줄은 오버로드 시그니처이고 세 번째 줄은 구현 시그니처 코드입니다.

```jsx
function createDate(timeStamp:number):Date;
function createDate(month:number, day:number, year:number):Date;
function createDate(monthOrTimestamp:number, day?: number, year?:number){
    return day === undefined || year === undefined
    ? new Date(monthOrTimestamp)
    : new Date(year, monthOrTimestamp, day);
}

createDate(55443336800);
createDate(7,27,1987);

createDate(4,1);
//No overload expects 2 arguments, 
//but overloads do exist that expect either 1 or 3 arguments.(2575)
```

타입스크립트를 컴파일해 자바스크립트로 출력하면 다른 타입 시스템 구문처럼 오버로드 시그니처도 지워짐.

```jsx
function createDate(monthOrTimestamp,dasy,year){
    return day === undefined || year === undefined
    ? new Date(monthOrTimestamp)
    : new Date(year, monthOrTimestamp. day);
}
```

<aside>
💡 함수 오버로드는 복잡하고 설명하기 어려운 함수 타입에 사용하는 최후의 수단입니다. 함수를 단순하게 유지하고 가능하면 함수 오버로드를 사용하지 않는 것이 좋다.

</aside>

### 호출 시그지처 호환성

오버로드된 함수의 구현에서 사용되는 구현 시그니처는 매개변수 타입과 변환 타입에 사용하는 것과 동일함. 따라서 함수의 시그니처에 있는 반환 타입과 각 매개변수느 구현 시그니처에 있는 동일한 인덱스의 매개변수에 할당할 수 있어야 합니다. 즉, 구현 시그니처는 모든 오버로드 시그니처와 호환되어야 함.

다음 format 함수의 구현 시그니처는 첫 번째 매개변술 string으로 선언함. 처음 두개의 오버로드 시그니처는 string 타입과 호환되지만, 세 번째 오버로드 시그니처의 () ⇒ string 타입과는 호환되지 않는다.

```jsx
function format(data:string):string;
function format(data:string, needle: string, haystack:string):string;

function format(getData: () => string): string;
// This overload signature is not compatible with its implementation signature.
function format(data:string, neelde?:string, haystack?:string){
    return neelde &&haystack ? data.replace(neelde, haystack): data;
}
```

