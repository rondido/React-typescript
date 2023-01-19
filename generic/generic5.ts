//class
class Person<T,K> {
    private _name: T;
    private _age : K;
    constructor(name: T,age:K){
        this._name = name;
        this._age = age;
    }
}

new Person('Park',30);
//new Person<string>('song');
new Person<string,number>('song',30);