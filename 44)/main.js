function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Items are here");
    items.forEach(function (each) { return console.log(each); });
}
sandwich("Butter", "Chicken");
sandwich("Potato", "Chicken");
