let array = [1,2,3,4,5,6,7,8,9];

for(let each of array)
    {
        let end: string ;
        if(each === 1)
            {
                end = "st"
            }
            else if(each === 2)
            {
                end = "nd"
            }
            else if(each === 3)
            {
                end ="rd"
            }
            else{
                end= "th"
            }

            console.log(`${each}${end}`);
    }
