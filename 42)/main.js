var arrayofmagicians = ["Ali", "Saad", "Muneeb"];
function makegreat(arrayofmagicians) {
    return arrayofmagicians.map(function (each) { return "THE GREAT ".concat(each); });
}
//let arrayofmagicians = ["Ali","Saad","Muneeb"]
var variable = makegreat(arrayofmagicians);
console.log(variable);
