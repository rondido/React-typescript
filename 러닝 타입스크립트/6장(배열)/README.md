# 배열

자바스크립트 배열은 매우 유연하고 내부에 모든 타입의 값을 혼합해서 저장할 수 있다.

```jsx
const elements = [true,null, undefined, 42];

elements.push("even", ["more"]);
//Argument of type '"even"' is not assignable to parameter of type 'number | boolean | null | undefined
```

그러나 대부분의 개별 자바스크립트 배열은 하나의 특정 타입의 값만 가집니다. 다른 타입의 값을 추가하게 되면 배열을 읽을 때 혼란을 줄 수 있으며, 최악의 상황으로는 프로그램에 문제가 될 만한 오류가 발생할 수도 있습니다.

타입스크립트는 초기 배열에 어떤 데이터 타입이 있는지 기억하고, 배열이 해당 데이터 타입에서만 작동하도록 제한합니다. 이런 방식으로 배열의 데이터 타입을 하나로 유지시킵니다.

다음 예제에서 타입스크립트는 warriors 배열이 초기에 string 타입의 값을 포함한다는 것을 알고 있으므로 이후 string 타입의 값 추가는 허용하지만 다른 데이터 타입 추가는 허용하지 않는다.

```jsx
const warrios = ["Artemisia","Boudica"];

warrios.push("zenobia");
warrios.push(true);

//Argument of type 'boolean' is not assignable to parameter of type 'string'.
```

타입스크립트가 초기 배열에 담긴 요소를 통해 배열의 타입을 유추하는 방법은 변수의 초깃값에서 변수 타입을 유추하는 방법과 유사함. 타입스크립트는 값이 할당되는 방식에서 코드의 의도된 타입을 이해하려고 시도하며 배열도 예외는 아님.

## 배열 타입

다른 변수 선언과 마찬가지로 배열을 저장하기 위한 변수는 초깃값이 필요하지 않습니다. 변수는 undefined로 시작해서 나중에 배열 값을 받을 수 있다.

타입스크립트는 변수에 타입 애너테이션을 제공해 배열이 포함해야 하는 값의 타입을 알려주려고 함. 배열에 대한 타입 애너테이션은 배열의 요소 타입 다음에 []가 와야 함.

```jsx
let arrayOfNumbers:number[];
arrayOfNumbers = [4,8,15,16,23,42];
```

<aside>
💡 배열 타입은 Array<number>같은 구문으로 작성할 수 있다. 하지만 개발자 대부분은 더 간단한 number[]을 선호합니다.

</aside>

### 배열과 함수 타입

배열 타입은 함수 타입에 무엇이 있는지를 구별하는 괄호가 필요한 구문 컨테이너의 예입니다.

괄호는 애너테이션의 어느 부분이 함수 반환 부분이고 어느 부분이 배열 타입 묶은지를 나타내기 위해 사용함.

다음 함수 타입인 createStrings는 배열 타입인 stringCreators와 동일하지 않는다.

```jsx
let createString: () => string[];
let stringCreatetors:(()=>string)[];
```

타입스크립트는 배열의 선언에서 두 가지 이상의 요소 타입이 포함되는 경우 유니언 타입 배열임을 알게 됨. 

즉, 배열의 요소 타입은 배열에 담긴 요소에 대한 모든가능한 타입의 집합입니다.

다음 nameMaybe는 string 값과 undefined값을 모두 가지므로 (string | undefined)[]타입입니다.

```jsx
const namesMaybe = [
    "abc",
    "ddd",
    undefined
]
```

### any 배열의 진화

초기에 빈 배열로 설정된 변수에서 타입 애너테이션을 포함하지 않으면 타입스크립트는 배열을 any[]로 취급하고 모든 콘텐츠를 받을 수 있다. 하지만 any 변수가 변경되는 것처럼 any[] 배열이 변경되는 것도 좋아하지 않는다. 타입 애너테이션이 없는 빈 배열은 잠재적으로 잘못된 값 추가를 허용해 타입스크립트의 타입 검사기가 갖는 이점을 부분적으로 무력화하기 때문임.

다음 values 배열은 any 요소를 갖고 시작해 string 요소를 포함하도록 바뀐 다음, 다시 number | string 요소로 바뀜.

```jsx
// 타입 : any[]
let values =[];
// 타입 : string []
values.push('');
// 타입 : (number | strign)[]
values[0] = 0;
```

변수와 마찬가지로 배열이 any 타입이 되도록 허용하거나 일반적으로 any 타입을 사용하도록 허용하면 타입스크립트의 타입 검사 목적을 부분적으로 무효화함. 

### 다차원 배열

2차원 배열 또는 배열의 배열은 두개의 [](대괄호)를 갖습니다.

```jsx
let arrayOfArraysOfNumbers: number[][];

arrayOfArraysOfNumbers = [
    [1,2,3],
    [2,4,6],
    [3,6,9]
]
```

3차원배열 또는 배열의 배열의 배열에는 세 개의 []가 있고 4차원 배열에는 네 개의 []가 있습니다. 그럼 6차원 배열이나 그 이상의 배열에는 몇 개의 []가 필요한지 예측할 수 있다.

이러한 다차원 배열 타입은 배열 타입에 새로운 개념을 도입한게 아닙니다. 즉, 2차원 배열은 원래의 타입을 가지며 끝에 []가 있고, 그 뒤에 []를 추가한다고 생각하면 쉽습니다.

```jsx
//타입: number[][];
let arrayOfArraysNumber: (number[])[];
```

## 배열 멤버

타입스크립트는 배열의 멤버를 찾아서 해당 배열의 타입 요소를 되돌려주는 전형적인 인덱스기반 접근 방식을 이해하는 언어임.

다음 defenders 배열은 string[] 타입이므로 defender는 string 타입입니다.

```jsx
const defenders = ["clar","Dina"];

//타입:string
const defender = defenders[0];
```

유니언 타입으로 된 배열의 멤버는 그 자체로 동일한 유니언 타입입니다.

다음 solidersOrDates는 (string | Date)[]타입이므로 soldierOrDate 변수는 string | Date 타입입니다.

```jsx
const soldiresOrDates = ["Debarsh", new Date(1782,6,3)];

//타입: string | Date
const soldireorDate = soldiresOrDates[0];
```