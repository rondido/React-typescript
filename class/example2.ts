class Person1{
    public static CITY = "Busan";
    public static hello(){
        console.log("안녕", Person1.CITY);
    }
    public change(){
        Person1.CITY="LA";
    }
}

const pe1 = new Person1();
//밑에 처럼 사용할 수 없다..
//p1.hello();

Person1.hello();
Person1.CITY;

pe1.change();