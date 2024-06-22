function car(manufacturer , model , ...additional)
{
    let carobj = {
        objmanufacturer: manufacturer,
        objmodel: model,
    };

    additional.forEach(each => {
        let [key,val] = each.split(":");
        car[key.trim()] = val.trim();
    });

    return carobj;
    }

    let variable = car("toyota","Corola");
    console.log(variable);
    let variable2 = car("toyota","Corola","Color:White","Sunroof:False");
    console.log(variable2);

    