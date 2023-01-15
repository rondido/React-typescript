"use strict";
function hello3(person) {
    console.log(`${person.name}`);
}
const p31 = {
    name: 'Mark',
    age: 20,
};
const p32 = {
    name: "Anna",
    systers: ['PArk', 'Chan'],
};
const p33 = {
    name: "bokdaengi",
    father: p31,
    mother: p32,
};
hello3(p31);
