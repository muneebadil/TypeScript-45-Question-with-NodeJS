let array =["Ali","Samad","Admin"];

array.pop();
array.pop();
array.pop();
array.pop();
if(array.length === 0)
    {
        console.log("array is Empty");
    }
    else{
array.forEach(each=>{
    if(each === "Admin")
        {
            console.log("would you like to see a status report?");
            console.log(`${each} Welcome`);
        }
        else{
            console.log("thanks for login");
            console.log(`${each} always available`);
        }
})}