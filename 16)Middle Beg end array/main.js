var guestarray = ["ali", "saad", "sami"];
var notavailable = guestarray[0];
console.log("Dont available for dinner ", notavailable);
guestarray.splice(0, 1, "Muneeb");
//guestarray.forEach(guest => console.log(`Hello ${guest} you all are intived for dinner `));
console.log("We have Bigger Table for dinner");
guestarray.unshift("Sohail");
guestarray.push("Rashid");
var mid = Math.floor(guestarray.length / 2);
guestarray.splice(mid, 0, "Abubakar");
guestarray.forEach(function (guest) { return console.log("Hello ".concat(guest, " you all are intived for dinner ")); });
