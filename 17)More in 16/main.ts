let guestarray = ["ali", "saad", "sami"];

let notavailable = guestarray[0];

console.log("Dont available for dinner ", notavailable);

guestarray.splice(0, 1, "Muneeb");

//guestarray.forEach(guest => console.log(`Hello ${guest} you all are intived for dinner `));

console.log("We have Bigger Table for dinner");

guestarray.unshift("Sohail");
guestarray.push("Rashid");

let mid = Math.floor(guestarray.length / 2);

guestarray.splice(mid, 0, "Abubakar");

guestarray.forEach(guest => console.log(`Hello ${guest} you all are intived for dinner `));

console.log("We dont have now enough space only 2 people are alow for dinner only");

while (guestarray.length > 2) {
    let remg = guestarray.pop();
    console.log(`Sorry ${remg} You will be invited next time`);
}

guestarray.forEach( onlyguest => console.log(`You ${onlyguest},are only invited for Dinner`));

guestarray.pop();
guestarray.pop();

console.log("Empty",guestarray);