interface IPerson2{
    name:string;
    age?:number;
    
};

interface IKorean extends IPerson2{
    city: string;

};


const k: IKorean = {
    name:'Park',
    city:'Busan',
    age:29
};

