let arrayofmagicians = ["Ali","Saad","Muneeb"]
let copy_arrayofmagicians = arrayofmagicians.slice()

function makegreat(arrayofmagicians: string[])
{
   return arrayofmagicians.map(each => `THE GREAT ${each}`);
}
//let arrayofmagicians = ["Ali","Saad","Muneeb"]
let variable = makegreat(arrayofmagicians);
console.log(variable);

let variable2 = makegreat(copy_arrayofmagicians);
console.log(variable2);

console.log(arrayofmagicians);