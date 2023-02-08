# 유니언과 리터럴

---

- 유니언 : 값에 허용된 타입을 두 개 이상의 타입으로 확장하는 것
- 내로잉 : 값에 허용된 타입이 하나 이상의 가능한 타입이 되지 않도록 좁히는 것

### 유니언 타입

```tsx
let mathematician = Math.random() > 0.5 ? undefined : "mark";
```

둘 다 잠재적인 타입이긴 하지만 무조건 undefined이거나 혹은 무조건 string인 것도 아닙니다. mathematician은 undefined이거나 string 일 수 있다. ‘이거 혹은 저거’와 같은 타입은 유니언이라고 함.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0082608c-a10e-4662-8f75-448a3101b0d0/Untitled.png)

### 유니언 타입 선언

변수의 초기값이 있더라도 변수에 대한 명시적 타입 에너테이션을 제공하는 것이 유용할 때 유니언 타입을 사용함.

```tsx
let thinker: string | null = null;
if (Math.random() > 0.5) {
  thinker = "Good"; // Ok
}
```

### 유니언 속성

값이 유니언 타입일 때 타입스크립트는 유니언으로 선언한 모든 가능한 타입에 존재하는 멤버속성에만 접근할 수 있다. 유니언 외의 타입에 접근하려고 하면 타입 검사 오류가 발생한다.

```tsx
let physicist = Math.random() > 0.5 ? "Mark" : 84;

physicist.toString();

physicist.toUpperCase();
physicist.toFixed();
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f68e2959-a3d5-40df-927f-f48f9bf01405/Untitled.png)

모든 유니언 타입에 존재하지 않는 속성에 대한 접근을 제한하는 것은 안전 조치에 해당합니다 .객체가 어떤 속성을 포함한 타입으로 확실하게 알려지지 않는 경우, 타입스크립트는 해당 속성을 사용하려고 시도하는 것이 안전하지 않다고 여깁니다. 그런 속성이 존재하지 않을 수도 있다.

유니언 타입으로 정의된 여러 타입 중 하나의 타입으로 된 값의 속성을 사용하려면 코드에서 값이 보다 구체적인 타입 중 하나라는 것을 타입스크립트에 알려야 함. 이 과정을 내로잉이라고 부름.

### 내로잉

내로잉은 값이 정의, 선언 혹은 이전에 유추된 것보다 더 구체적인 타입임을 코드에서 유추하는 것임. 타입스크립트가 값의 타입이 이전에 알려진 것보다 더 좁혀졌다는 것을 알게되면 값을 더 구체적인 타입으로 취급합니다. 타입을 좁히는데 사용할 수 있는 논리적 검사를 타입 가드라고 한다.

### 값 할당을 통한 내로잉

변수에 값을 직접 할당하면 타입스크립트는 변수의 타입을 할당된 값의 타입으로 좁힙니다. 다음 admiral 변수는 초기에 number | string으로 선언했지만 “Grace Hopper” 값이 할당된 이후 타입스크립트는 admiral 변수가 string 타입이라는 것을 알게 됩니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/56d55dc5-ffc1-4382-91b5-b947fb299cf2/Untitled.png)

다음 코드에서 inventor는 number | string 타입으로 선언되었지만 초기값으로 문자열이 할당되었기 때문에 타입스크립트는 즉시 string 타입으로 바로 좁혀졌다는 것을 알고 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1e25b09d-2aef-49e2-b805-d6b02c0b459a/Untitled.png)

### 조건 검사를 통한 내로잉

일반적으로 타입스크립트에서는 변수가 알려진 값과 같은지 확인하는 if 문을 통해 변수의 값을 좁히는 방법을 사용함. 타입스크립트는 if 문 내에서 변수가 알려진 값과 동일한 타입인지 확인함.

```tsx
// scientist: number | string의 타입
let scientist = Math.random() > 0.5 ? "Rosalind Franklin" : 51;

if (scientist === "Rosalind Franklin") {
  //scientist : string의 타입
  scientist.toUpperCase();
}

//scientist:number | string의 타입
scientist.toUpperCase();
```

조건부 로직으로 내로잉할 때, 타입스크립트 검사 로직은 훌륭한 자바스크립트 코딩 패턴을 미러링해 구현합니다. 만약 변수가 여러 타입 중 하나라면, 일반적으로 필요한 타입과 관련된 검사를 원할 것입니다.

### typeof 검사를 통한 내로잉

scientist 예제와 유사하게 다음 if 문에서 typeof researcher가 “string”인지 확인해 타입스크립트에 researcher의 string임을 나타냅니다.

```tsx
let researcher = Math.random() > 0.5 ? "Rosalind Franklin" : 51;

if (typeof researcher === "string") {
  researcher.toUpperCase(); //OK :string
}

if (!(typeof researcher === "string")) {
  researcher.toFixed(); //Ok :number
} else {
  researcher.toUpperCase(); // Ok :string
}
```

### 리터럴 타입

두 개 이상의 잠재력 타입이 될 수 있는 값을 다루기 위해 유니언 타입과 내로잉을 살펴봤으니 지금부터는 리터럴 타입을 소개하겠습니다. 리터럴 타입은 좀 더 구체적인 버전의 원시 타입입니다.

```tsx
let philosopher = "Hypatia";
```

하지만 philosopher는 단지 string 타입이 아닌 “Hypatia”라는 특별한 값입니다. 따라서 변수 philosopher의 타입은 기술적으로 더 구체적인 “Hypatia”입니다.

이것이 바로 리터럴 타입의 개념입니다. 원시 타입 값 중 어떤 것이 아닌 특정 원싯값으로 알려진 타입이 리터럴 타입입니다. 원시 타입 string은 존재할 수 있는 모든 가능한 문자열의 집합을 나타냅니다.

각 원시 타입은 해당 타입이 가질 수 있는 가능한 모든 리터럴 값의 전체 조합으로 생각할 수 있습니다. 즉, 원시 타입은 해당 타입의 가능한 모든 리터럴 값의 집합.

boolean, null, undefined 타입 외에 number, string 과 같은 모든 원시 타입에는 무한한 수의 리터럴 타입이 있습니다.

- boolean: true | false
- null과 undefined: 둘 다 자기자신, 즉,오직 하나의 리터럴 값만 가짐
- number: 0 | 1 | 2 … | 0.1 | 0.2 | ...
- string: “” | “a” | “b” | “c” | … | “aa” | “ab” | “ac” | …

유니언 타입 에너테이션에서는 리터럴과 원시 타입을 섞어서 사용할 수 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2eddffb3-45f9-4b2a-aabd-25f900a1e3fa/Untitled.png)

### 리터럴 할당 가능성

```tsx
let specificallyAda: "Ada";
specificallyAda = "Ada"; // ok
specificallyAda = "Byron";

let someString = ""; //타입 :string;
specificallyAda = someString;
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/33218b79-e669-4148-974d-b27f67a288f4/Untitled.png)

그러나 리터럴은 그 값이 해당하는 원시 타입에 할당할 수 있습니다. 모든 특정 리터럴 문자열은 여전히 string 타입이기 때문입니다.

```tsx
someString = ":)";
```

### 엄격한 null 검사

리터럴로 좁혀진 유니언의 힘은 타입스크립트에서 엄격한 null 검사라 부르는 타입 시스템 영역인 ‘잠재적으로 정의되지 않은 undefiend 값’으로 작업할 때 특히 두드러집니다. 타입스크립트는 두려운 ‘십억 달러의 실수’를 바로잡기 위해 엄격한 null검사를 사용하며 이는 최신의 프로그래밍 언어의 큰 변화 중 하나임.
