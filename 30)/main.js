var array = ["Ali", "Samad", "Admin"];
array.forEach(function (each) {
    if (each === "Admin") {
        console.log("would you like to see a status report?");
        console.log("".concat(each, " Welcome"));
    }
    else {
        console.log("thanks for login");
        console.log("".concat(each, " always available"));
    }
});
