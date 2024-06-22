let guestarray =["ali","saad","sami"];

let notavailable = guestarray[0];

console.log("Dont available for dinner ", notavailable);

guestarray.splice(0,1,"Muneeb");

guestarray.forEach(guest => console.log(`Hello ${guest} you all are intived for dinner `));