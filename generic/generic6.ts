//extends
class PersonExtends<T extends string | number>{
    private _name: T;

    constructor(name:T){
        this._name=name;
    }
}


new PersonExtends('Park');
new PersonExtends(30);
//new PersonExtends(true); error 발생