function sandwich(...items: string[])
{
    console.log("Sandwich Items are here");
    items.forEach(each => console.log(each));

}

sandwich("Butter","Chicken");
sandwich("Potato","Chicken");