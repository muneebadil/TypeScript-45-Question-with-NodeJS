var currentuser = ["ali", "saad", "abbas", "muneeb", "asghar"];
var newuser = ["ahsan", "ali", "abbas", "salik", "gani"];
newuser.forEach(function (each) {
    var mycondition = currentuser.some(function (neweach) { return neweach.toLowerCase() === each.toLowerCase(); });
    if (mycondition) {
        console.log("sorry ".concat(each, " is already taken"));
    }
    else {
        console.log("The username is ".concat(each, " available"));
    }
});
