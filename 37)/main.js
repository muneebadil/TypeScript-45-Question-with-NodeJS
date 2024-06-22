function makeshirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("Your Selected size : ".concat(size, " and the message : ").concat(message));
}
makeshirt();
makeshirt("Medium");
makeshirt("Small", "I Love C");
