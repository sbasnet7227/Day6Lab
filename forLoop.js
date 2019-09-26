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

// prompt user if they want to add a cat
var wantsToAddChicken= prompt("Do you want to add a chicken?");

var numberOfChicken = prompt('How many chicken do you want to add?');


for (numberOfChicken; numberOfChicken > 0; numberOfChicken--) {
    
  // if so, ask for name and description
  var chickenName = prompt("What is the chicken's name?");
  var chickenDescription = prompt("What is the chicken's description?");

  // give name and description to the constructCatHTML function to let it do its thing
  var newChickenHtml = creatChickenHTML (chickenName, chickenDescription);

  // hand the resulting HTML off to document.write
  console.log(newChickenHtml);
  document.write(newChickenHtml);
}
