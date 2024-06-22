var arrayofmagicians = ["Ali", "Saad", "Muneeb"];
var copy_arrayofmagicians = arrayofmagicians.slice();
function makegreat(arrayofmagicians) {
    return arrayofmagicians.map(function (each) { return "THE GREAT ".concat(each); });
}
//let arrayofmagicians = ["Ali","Saad","Muneeb"]
var variable = makegreat(arrayofmagicians);
console.log(variable);
var variable2 = makegreat(copy_arrayofmagicians);
console.log(variable2);
console.log(arrayofmagicians);
