

function creatChickenHTML (name , description){

    var newChicken = '<article>' +
    '<img src="chicken.jpg">' +
    '<h3>' +
    name +
    '</h3>' +
    '<p>' +
    description +
    '</p>' +
    '</article>' ;
return newChicken;
}


var numberOfChicken = prompt('how many times chicken do you want to add?')


while (numberOfChicken > 0){
    
    var chickenName = prompt('What is the chicken name?');
    var chickenDescription = prompt('what is the chicken description?');

    // give name and description to the CreatChickenHTML function to let it do its thing.
    
    var newChickenCreated = creatChickenHTML( chickenName, chickenDescription);
    console.log(newChickenCreated);
    document.write (newChickenCreated);

    numberOfChicken --;
    

}




