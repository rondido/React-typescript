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
