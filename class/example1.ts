//class => object
//{mark:'male', jade:'male}
//{chloe:'female',alex:'male, anna:'female}

class Students{
    [index:string]: "male" | "female";

    mark: "male" ='male';
}



const a = new Students();
a.mark = 'male';
a.jade = 'male';

console.log(a);

const b = new Students();
b.chloe = 'female';
b.alex = 'male';
b.anna = 'female';

console.log(b)


