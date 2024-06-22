let pname : string = '';
pname = prompt('What is your Name Input : ') || '' ;

let lowercase : string = pname.toLowerCase();
let uppercase : string = pname.toUpperCase();
let titlecase : string = pname.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

if(pname !== null && pname !== '')
{
    alert(`Hello ${pname}, Here are your name in : 
    lowercase : ${lowercase}
    UPPERCASE : ${uppercase}
    TitleCase : ${titlecase}`)
}
else{
    alert(`Fill Correct Name Please`)
}