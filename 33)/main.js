var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var each = array_1[_i];
    var end = void 0;
    if (each === 1) {
        end = "st";
    }
    else if (each === 2) {
        end = "nd";
    }
    else if (each === 3) {
        end = "rd";
    }
    else {
        end = "th";
    }
    console.log("".concat(each).concat(end));
}
