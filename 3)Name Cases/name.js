"use strict";
let pname = '';
pname = prompt('What is your Name Input : ') || '';
let lowercase = pname.toLowerCase();
let uppercase = pname.toUpperCase();
let titlecase = pname.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
if (pname !== null && pname !== '') {
    alert(`Hello ${pname}, Here are your name in : 
    lowercase : ${lowercase}
    UPPERCASE : ${uppercase}
    TitleCase : ${titlecase}`);
}
else {
    alert(`Fill Correct Name Please`);
}
