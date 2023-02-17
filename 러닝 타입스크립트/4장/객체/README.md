# 객체

## 객체 타입

{…} 구문을 사용해서 객체 리터럴을 생성하면, 타입스크립트는 해당 속성을 기반으로 새로운 객체 타입 또는 타입 형태를 고려함. 해당 객체 타입은 객체의 값과 동일한 속성명과 원시 타입을 갖는다. 값의 속성에 접근하려면 value.멤버 또는 value[’멤버’]구문을 사용합니다.

다음 poet 변수의 타입은 number 타입인 born과 string 타입인 name으로 이루어진 두 개의 속성을 갖는 객체임. 이 두 개의 속성에 접근하는 것은 허용되지만, 다른 속성 이름으로 접근하려고 하면 해당 이름이 존재하지 않는다는 타입 오류가 발생함.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b27da443-02dc-4ffc-b081-cc9cdd4be313/Untitled.png)

객체 타입은 타입스크립트가 자바스크립트 코드를 이해하는 방법에 대한 핵심 개념입니다. null 과 undefined를 제외한 모든 값은 그 값에 대한 실제 타입의 멤버 집합을 가지므로 타입스크립트는 모든 값의 타입을 확인하기 위해 객체 타입을 이해해야 함.

### 객체 타입 선언

기존 객체에서 직접 타입을 유추하는 방법도 굉장히 좋지만, 결국에는 객체의 타입을 명시적으로 선언하고 싶다. 명시적으로 타입이 선언된 객체와는 별도로 객체의 형태를 설명하는 방법이 필요함.

객체 타입은 객체 리터럴과 유사하게 보이지만 필드 값 대신 타입을 사용해 설명합니다. 타입스크립트가 타입 할당 가능성에 대한 오류 메시지에 표시하는 것과 동일한 구문임.

poetLater 변수는 born: number와 name:string으로 이전과 동일한 타입입니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ed48d81b-2c05-416e-be75-053f7003b5cb/Untitled.png)

### 별칭 객체 타입

`{born:number,name:string}` 과 같은 객체 타입을 계속 작성하는 일은 매우 귀찮습니다. 각 객체 타입에 타입 별칭을 할당해 사용하는 방법이 더 일반적입니다.

다음과 같이 이전 코드 스니펫은 poet 타입으로 다시 작성할 수 있으며, 타입스크립트의 할당가능성 오류 메시지를 좀 더 직접적으로 읽기 쉽게 만드는 추가 이점이 있다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1c86f6c4-3065-48fd-b85a-164a8bc770d4/Untitled.png)

이 시점에서 객체 타입을 살펴보는 이유는 타입스크립트의 타입 시스템을 배울 때, 타입스크립트가 객체 리터럴을 해석하는 방법을 이해하는 것이 매우 중요하기 때문.

## 구조적 타이핑

타입스크립트의 타입 시스템은 구조적으로 타입화되어 있다. 즉, 타입을 충족하는 모든 값을 해당 타입의 값으로 사용할 수 있다. 다시 말하자면 매개변수나 변수가 특정 객체 타입으로 선언되면 타입스크립트에 어떤 객체를 사용하든 해당 속성이 있어야 한다고 말해야 함.

```tsx
type withFirstName = {
  firstName: string;
};

type withLastName = {
  lastName: string;
};

const hasBoth = {
  firstName: "Park",
  lastName: "Jin",
};

let withFirstName: withFirstName = hasBoth;

let withLastName: withLastName = hasBoth;
```

구조적 타이핑은 덕 타이핑과는 다릅니다. 덕 타이핑은 ‘오리처럼 보이고 오리처럼 꽥꽥거리면, 오리일 것이다’라는 문구에서 유래했다.

- 타입스크립트의 타입 검사기에서 구조적 타이핑은 정적 시스템이 타입을 검사하는 경우임.
- 덕 타이핑은 런타임에서 사용될 때까지 객체 타입을 검사하지 않는 것을 말함.

요약하면 자바스크립트는 덕타입인 반면 타입스크립트는 구조적으로 타입화 됨.

## 사용 검사

객체 타입으로 에너테이션된 위치에 값을 제공할 때 타입스크립트는 값을 해당 객체 타입에 할당할 수 있는지 확인함. 할당하는 값에는 객체 타입의 필수 속성이 있어야 함. 객체 타입에 필요한 맴버가 객체에 없다면 타입스크립트는 타입 오류를 발생시킴

다음 별칭 객체인 FirstAndLastNames는 first와 last 속성이 모두 있어야 함. 두 가지 속성을 모두 포함한 객체는 FirstAndLastNames 타입으로 선언된 변수에 사용할 수 있지만, 두 가지 속성이 모두 없는 객체는 사용할 수 없다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/606d539e-8722-4c8d-b0bf-e473c25a610e/Untitled.png)

둘사이 일치하지 않는 타입도 허용되지 않는다. 객체 타입은 필수 속성 이름과 해당 속성이 예상되는 타입을 모두 지정함. 객체의 속성이 일치하지 않으면 타입스크립트는 타입 오류를 발생시킴

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/77698746-20fc-4320-ba34-9c843f34bd48/Untitled.png)

## 초과 속성 검사

변수가 객체 타입으로 선언되고, 초깃값에 객체 타입에서 정의된 것보다 많은 필드가 있다면

타입스크립트에서 타입 오류가 발생함. 따라서 변수를 객체 타입으로 선언하는 것은 타입 검사기가 해당 타입에 예상되는 필드만 있는지 확인하는 방법이기도 함.

다음 poetMatch 변수는 별칭 객체 타입에 정의된 필드가 Poet에 정확히 있지만, 초과 속성이 있는 extraProperty는 타입 오류를 발생시킴

```jsx
type Poet = {
  born: number,
  name: string,
};

const poetMatch: Poet = {
  born: 1928,
  name: "mark",
};

const extraProperty: Poet = {
  activity: "123",
  born: 1928,
  name: "mark",
};
```

초과 속성 검사는 객체 타입으로 선언된 위치에서 생성되는 객체 리터럴에 대해서만 일어난다.

기존 객체 리터럴을 제공하면 초과 속성 검사를 우회함.

```jsx
type Poet = {
  born: number,
  name: string,
};
const existingObject = {
  activity: "marking",
  born: 1935,
  name: "mark",
};

const extraPropertyButOk: Poet = existingObject;
```

### 중첩된 객체 타입

자바스크립트 객체는 다른 객체의 멤버로 중첩될 수 있으므로 타입스크립트의 객체 타입도 타입 시스템에서 중첩된 객체 타입을 나타낼 수 있어야 함. 이를 구현하는 구문은 이전과 동일하지만 기본 이름 대신에 {…} 객체 탕타입을 사용합니다.

```jsx
type Poem = {
  author: {
    firstName: string,
    lastName: string,
  },
  name: string,
};

const peomMatch: Poem = {
  author: {
    firstName: "syvlia",
    lastName: "Park",
  },
  name: "Lady",
};

const peomMismatch: Poem = {
  author: {
    name: "mark",
  },
};
```

Peom 타입은 author 속성이 fistName: string과 lastName: string인 객체로 선언. peomMatch 변수는 Poem과 일치하기대문에 할당할 수 있지만 peomMismatch는 author 속성에 firstname과 lastname 대신 name을 포함하므로 할당 할 수 없다.

Poem 타입을 작성할 때 author 속성의 형태를 자체 별칭 객체 타입으로 추출하는 방법도 있다. 중첩된 타입을 자체 타입 별칭으로 추출하면 타입스크립트의 타입 오류 메시지에 더 많은 정보를 담을 수 있다. 이 경우에는 {firstName:string, lastName:string;} 대신 Author를 사용할 수 있다.

```jsx
type Author = {
  firstName: string,
  lastName: string,
};
type Poem = {
  author: Author,
  name: string,
};

const peomMatch: Poem = {
  author: {
    firstName: "syvlia",
    lastName: "Park",
  },
  name: "Lady",
};

const peomMismatch: Poem = {
  author: {
    name: "mark",
  },
};
```

### 선택적 속성

모든 객체에 객체 타입 속성이 필요한건 아닙니다. 타입의 속성 애너테이션에서 : 앞에 ?를 추가하면 선택적 속성임을 나타낼 수 있다.

다음 Book 타입은 pages 속성만 필요하고 author 속성은 선택적으로 허용함. 객체가 pages 속성을 제공하기만 하면 author 속성은 제공하거나 생략할 수 있다.

```tsx
type Book = {
  author?: string;
  pages: number;
};

const ok: Book = {
  author: "mark",
  pages: 80,
};

const missing: Book = {
  author: "Rita",
};
//error: Property 'pages' is missing in type
```

선택적 속성과 undefined를 포함한 유니언 타입의 속성 사이에는 차이가 있음을 명심하세요. ?를 사용해 선택적으로 선언된 속성은 존재하지 않아도 됨. 필수로 선언된 속성과 | undefiend는 그 값이 undefined일지라도 반드시 존재해야 함.

다음 Writers 타입의 editor 속성은 ?를 사용해 선언했으므로 변수를 선언할 때 생략이 가능함. author 속성은 ?가 없으므로 값이 undefiend여도 반드시 존재해야 함.

```jsx
type Writers = {
  author: string | undefined,
  editr?: string,
};

const hasRequired: Writers = {
  author: undefined,
};

const missingRequired: Writers = {};
```

## 객체 타입 유니언

타입스크립트 코드에서는 속성이 조금 다른, 하나 이상의 서로 다른 객체 타입이 될 수 있는 타입을 설명할 수 있어야 함. 또한 속성값을 기반으로 해당 객체 타입 간에 타입을 좁혀야할 수 있다.

### 유추된 객체 타입 유니언

변수에 여러 객체 타입 중 하나가 될 수 있는 초기값이 주어지면 타입스크립트는 해당 타입을 객체 타입 유니언으로 유추함. 유니언 타입은 가능한 각 객체 타입을 구성하고 있는 요소를 모두 가질 수 있다. 객체 타입에 정의된 각각의 가능한 속성은 비록 초기값이 없는 선택적 타입이지만 각 객체 타입의 구성 요소로 주어짐.

다음 poem 같은 항상 string 타입인 name 속성을 가지며 pages와 rhymes는 있을 수도 있고, 없을 수도 있음.

```jsx
const poem =
  Math.random() > 0.5
    ? { name: "double", pages: 7 }
    : { name: "kind", rhymes: true };

poem.name; //string
poem.pages; // number | undefined
poem.rhymes; // Boolean | undefined
```

### 명시된 객체 타입 유니언

객체 타입의 조합을 명시하면 객체 타입으 더 명확히 정의할 수 있다. 코드를 조금 더 작성해야 하지만 객체 타입을 더 많이 제어할 수 있는 이점이 있습니다. 특히 값의 타입이 객체 타입으로 구성된 유니언이라면 타입스크립트의 타입 시스템은 이런 모든 유니언 타입에 존재하는 속성에 대한 접근만 허용.

poem 변수는 pages 또는 rhymes와 함께 필수 속성인 name을 항상 갖는 유니언 타입으로 명시적으로 작성됨. 속성 name에 접근하는 것은 name속성이 항상 존재하기 때문에 허용되지만 pages와 rhymes는 항상 존재한다는 보장이 없다.

```tsx
type PoemMithPages = {
  name: string;
  pages: number;
};

type PoemMithRhymes = {
  name: string;
  rhymes: boolean;
};

type Poem = PoemMithPages | PoemMithRhymes;

const poem: Poem =
  Math.random() > 0.5
    ? { name: "dobule", pages: 7 }
    : { name: "mark", rhymes: true };

poem.name;
poem.pages; //eror
poem.rhymes; // error
```

잠재적으로 존재하지 않는 객체의 맴버에 대한 접근을 제한하면 코드의 안전을 지킬 수 있다. 값이 여러 타입 중 하나일 경우, 모든 타입에 존재하지 않는 속성이 객체에 존재할 거라 보장할 수 없다.

리터럴 타입이나 원시 타입 모두, 혹은 둘 중 하나로 이루어진 유니언 타입에서 모든 타입에 존재하지 않은 속성에 접근하기 위해 타입을 좁혀야 하는 것처럼 객체 타입 유니언도 타입을 좁혀야 합니다.

### 객체 타입 내로잉

타입 검사기가 유니언 타입 값에 특정 속성이 포함된 경우에만 코드 영역을 실행할 수 있음을 알게 되면, 값의 타입을 해당 속성을 포함하는 구성 요소로만 좁힙니다. 즉, 코드에서 객체의 형태를 확인하고 타입 내로잉이 객체에 적용됨.

명시적으로 입력된 poem 예제를 계속 살펴보면, poem의 pages가 타입스크립트의 타입 가드역할을 해 PoemMithPages임을 나타내는지 확인함. 만일, Poem이 PoemWithpages가 아니라면 PoemWithRhymes이어야 함.

```jsx
if ("pages" in poem) {
  poem.pages; //ok
} else {
  poem.rhymes; // ok
}
```

타입스크립트는 if (poem.pages)와 같은 형식으로 참 여부를 확인하는 것을 허용하지 않습니다. 존재하지 않는 객체의 속성에 접근하려고 시도하면 타입 가드처럼 작동하는 방식으로 사용되더라도 타입 오류로 간주됨.

```jsx
if(poem.pages){...}
```

### 판별된 유니언

자바스크립트와 타입스크립트에서 유니언 타입으로 된 객체의 또 다른 인기 있는 형태는 객체의 속성이 객체의 형태를 나타내도록 하는 것 이러한 타입 형태를 판별된 유니언이라 부르고, 객체의 타입을 가리키는 속성이 판별값입니다. 타입스크립트는 코드에서 판별 속성을 사용해 타입 내로잉을 수행함.

다음 Poem 타입은 PoemMithPages 타입 또 PoemWithRhymes 타입 둘 다 될 수 있는 객체를 설명하고 type 속성으로 어느 타입인지를 나타냄. 만일 poem.type이 page이면, 타입스크립트는 poem을 PoemWithPages로 유추함. 타입 내로잉 없이는 값에 존재하는 속성을 보장할 수 없다.

```tsx
type PoemMithPages = {
  name: string;
  pages: number;
  type: "pages";
};

type PoemMithRhymes = {
  name: string;
  rhymes: boolean;
  type: "rhymes";
};

type Poem = PoemMithPages | PoemMithRhymes;

const poem: Poem =
  Math.random() > 0.5
    ? { name: "dobule", pages: 7, type: "pages" }
    : { name: "mark", rhymes: true, type: "rhymes" };

if (poem.type === "pages") {
  console.log(`Its got pages:${poem.pages}`);
} else {
  console.log(`It rhymes:${poem.rhymes}`);
}

poem.pages; //error
```

판별된 유니언은 우아한 자바스크립트 패턴과 타입스크립트의 타입 내로잉을 아름답게 결합하므로 타입스크립트에서 필자가 가장 좋아하는 기능임.

## 교차 타입

타입스크립트 유니언 타입은 둘 이상의 다른 타입 중 하나의 타입이 될 수 있음을 나타냄. 자바스크립트의 런타임 | 연산자가 & 연산자에 대응하는 역할을 하는 것처럼, 타입스크립트에서도 & 교차 타입을 사용해 여러 타입을 동시에 나타냄. 교차 타입은 일반적으로 여러 기존 객체 타입을 별칭 객체 타입으로 결합해 새로운 타입을 생성함.

다음 Artwork와 Writing 타입은 genre,name,pages 속성을 결합한 WrittenArt 타입을 형성하는 데 사용

```jsx
type Artwork = {
  genre: string,
  name: string,
};

type Writing = {
  pages: number,
  name: string,
};

type WrittemArt = Artwork & Writing;
```

교차 타입은 유니언 타입과 결합할 수 있으며, 이는 하나의 타입으로 판별된 유니언 타이블 설명하는 데 유용함.

다음 ShortPoem 타입은 항상 author 속성을 가지며 하나의 type 속성으로 판별된 유니언 타입임.

```jsx
type ShortPoem = { author: string } & (
  | { kigo: string, type: "haiku" }
  | { meter: number, type: "villanelle" }
);

const morningGlory: ShortPoem = {
  author: "Fukuda",
  kigo: "morning Glory",
  type: "haiku",
};

const oneArt: ShortPoem = {
  // error:Type{author:string; type:"villanelle"}
  // is not assignable to type 'ShortPoem'.
  // type '{author:string; type:"villanelle";}
  author: "Bishop",
  type: "villanelle",
};
```

### 교차 타입의 위험성

교차 타입은 유용한 개념이지만, 여러분 스스로나 타입스크립트 컴파일러를 혼동시키는 방식으로 사용하기 쉽다. 교차 타입을 사용할 때는 가능한 한 코드를 간결하게 유지해야 합니다.

### 긴 할당 가능성 오류

유니언 타입과 결합하는 것처럼 복잡한 교차 타입을 만들게 되면 할당 가능성 오류 메시지는 읽기 어려워짐. 다시 말해 복잡하면 복잡할수록 타입 검사기의 메시지도 이해하기 더 어려워짐. 이 현상은 타입스크립트의 타입 시스템, 그리고 타입을 지정하는 프로그래밍 언어에서 공통적으로 관측됨.

이전 코드 스니펫의 ShortPoem의 경우 타입스크립트가 해당 이름을 출력하도록 타입을 일련의 별칭으로 객체 타입으로 분할하면 읽기가 훨씬 쉬워짐.

```jsx
type ShortPoemBase = {author:string};
type Haiku = ShortPoemBase & {kigo:string; type:"haiku"};
type villamelle = ShortPoemBase & {meter:number; type:"villanelle"};
type ShortPoem = Haiku & villamelle;

const oneArt:ShortPoem = {
//error" Type '{author:string; type:"villanelle"}
//is not assignable to type "shortPoem"
//typde '{author:string; type:"villanenlle";}'
    author:"Elizabeth Bishop",
    type:"villanelle
}
```

### never

교차 타입은 잘못 사용하기 쉽고 불가능한 타입을 생성합니다. 원시 타입의 값은 동시에 여러 타입이 될 수 없기 때문에 교차 타입의 구성 요소로 함께 결합할 수 없다. 두 개의 원시 타입을 함께 시도하면 never 키워드로 표시되는 never 타입이 됨.

```jsx
type NotPossible = number & string; //타입: never
```

never 키워드와 never 타입은 프로그래밍 언어에서 bottom 타입 또는 empty 타입을 뜻함. bottom 타입은 값을 가질 수 없고 참조할 수 없는 타입이므로 bottom 타입에 그 어떠한 타입도 제공할 수 없다.

```jsx
type NotPossible = number & string; //타입 :never
let notNumber: NotPossible = 0;

//Error: Type 'number' is not assignable to type 'never'.

let notString: never = "";
```

대부분의 타입스크립트 프로젝트는 never 타입을 거의 사용하지 않지만 코드에서 불가능한 상태를 나타내기 위해 가끔 등장함 하지만 대부분 교차 타입을 잘못 사용해 발생한 실수일 가능성이 높다.
