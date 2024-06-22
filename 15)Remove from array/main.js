var guestarray = ["ali", "saad", "sami"];
var notavailable = guestarray[0];
console.log("Dont available for dinner ", notavailable);
guestarray.splice(0, 1, "Muneeb");
guestarray.forEach(function (guest) { return console.log("Hello ".concat(guest, " you all are intived for dinner ")); });
