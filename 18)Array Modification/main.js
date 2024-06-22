var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var visitcountries = ["zimbabwe", "China", "Maldives", "Dubai", "Saudia"];
console.log("Original Order:", visitcountries);
console.log("Alphabetic Order:", __spreadArray([], visitcountries, true).sort());
console.log("Original Order:", visitcountries);
console.log("Reverse Order:", __spreadArray([], visitcountries, true).reverse());
console.log("Original :", visitcountries);
console.log("Original Reverse:", visitcountries.reverse());
