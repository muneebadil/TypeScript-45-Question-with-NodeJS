let currentuser = ["ali", "saad", "abbas", "muneeb", "asghar"];
let newuser = ["ahsan", "ali", "abbas", "salik", "gani"];

newuser.forEach(each => {let mycondition = currentuser.some(neweach => neweach.toLowerCase() === each.toLowerCase());
    if (mycondition) {
        console.log(`sorry ${each} is already taken`);
    }
    else {
        console.log(`The username is ${each} available`);
    }
})