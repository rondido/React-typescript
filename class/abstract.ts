abstract class AbstractPerson{
    protected _name: string ='Bob';

    abstract setName(name:string):void;
}

class Personab extends AbstractPerson{
    setName(name: string): void {
        this._name = name;
    }
}

const p = new Personab();

p.setName('bob');