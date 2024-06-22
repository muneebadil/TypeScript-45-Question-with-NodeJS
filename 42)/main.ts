let arrayofmagicians = ["Ali","Saad","Muneeb"]


function makegreat(arrayofmagicians: string[])
{
   return arrayofmagicians.map(each => `THE GREAT ${each}`);
}
//let arrayofmagicians = ["Ali","Saad","Muneeb"]
let variable = makegreat(arrayofmagicians);
console.log(variable);
