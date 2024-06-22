function car(manufacturer, model) {
    var additional = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additional[_i - 2] = arguments[_i];
    }
    var carobj = {
        objmanufacturer: manufacturer,
        objmodel: model,
    };
    additional.forEach(function (each) {
        var _a = each.split(":"), key = _a[0], val = _a[1];
        car[key.trim()] = val.trim();
    });
    return carobj;
}
var variable = car("toyota", "Corola");
console.log(variable);
var variable2 = car("toyota", "Corola", "Color:White", "Sunroof:False");
console.log(variable2);
