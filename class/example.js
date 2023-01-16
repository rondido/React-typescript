"use strict";
//class 이름은 대문자로 시작
class Person {
    constructor(name) {
        //밑에 처럼하면 error 발생 따로 설정을 하지 않았기 때문에
        //밑에 코드를 성사시킬리면 proterty를 써야함        
        this.name = name;
    }
}
const p1 = new Person("Mark");
console.log(p1);
