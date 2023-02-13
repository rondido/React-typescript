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

`{born:number,name:string}`  과 같은 객체 타입을 계속 작성하는 일은 매우 귀찮습니다. 각 객체 타입에 타입 별칭을 할당해 사용하는 방법이 더 일반적입니다.

다음과 같이 이전 코드 스니펫은 poet 타입으로 다시 작성할 수 있으며, 타입스크립트의 할당가능성 오류 메시지를 좀 더 직접적으로 읽기 쉽게 만드는 추가 이점이 있다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1c86f6c4-3065-48fd-b85a-164a8bc770d4/Untitled.png)

이 시점에서 객체 타입을 살펴보는 이유는 타입스크립트의 타입 시스템을 배울 때, 타입스크립트가 객체 리터럴을 해석하는 방법을 이해하는 것이 매우 중요하기 때문.

## 구조적 타이핑

타입스크립트의 타입 시스템은 구조적으로 타입화되어 있다. 즉, 타입을 충족하는 모든 값을 해당 타입의 값으로 사용할 수 있다. 다시 말하자면 매개변수나 변수가 특정 객체 타입으로 선언되면 타입스크립트에 어떤 객체를 사용하든 해당 속성이 있어야 한다고 말해야 함.

```tsx
type withFirstName={
    firstName:string;
}

type withLastName={
    lastName:string;
}

const hasBoth ={
    firstName:"Park",
    lastName:"Jin"
}

let withFirstName:withFirstName=hasBoth;

let withLastName:withLastName=hasBoth;
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