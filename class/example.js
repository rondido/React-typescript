"use strict";
class Person {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = 'Park';
        this.country = 'Korea';
    }
    hello() {
    }
}
const p1 = new Person('mark', 20);
console.log(p1.name); //get 을 하는 함수 getter
p1._name = "Hi"; //set 을 하는 함수 setter
console.log(p1.name); //get 을 하는 함수 getter
