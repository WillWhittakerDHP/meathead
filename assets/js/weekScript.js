let userName = "";
let muscleGroup = "";
let focusExercise = "";
let accessoryExercises = [
  {dayOne: ""},
  {dayTwo: ""},
  {dayThree: ""},
  {dayFour: ""},
  {dayFive:  ""}];
let splitDesign =[
  {timerLengthPerDay: ""},
  {splitDaysTotal: ""},
  {setsPerDay: ""},
  {repAdvice: ""}];
let percentagesForWeightAdvice = [];
let oneRepMax = [
  {focusOneRepMax: ""},
  {accessoryOneRepMax: ""}
];

  // function setValues() {
  // userName = localStorage.getItem('userName');
  // muscleGroup = localStorage.getItem('muscleGroup');
  // focusExercise = localStorage.getItem('focusExercise');
  // accessoryExercises = JSON.parse(localStorage.getItem('accessoryExercises'));
  // splitDesign = JSON.parse(localStorage.getItem('splitDesign'));
  // percentagesForWeightAdvice = JSON.parse(localStorage.getItem('percentagesForWeightAdvice'));
  // oneRepMax = JSON.parse(localStorage.getItem('oneRepMax'));

//   console.log(
//   //   userName, 
//   //   muscleGroup, 
//   //   focusExercise, 
//   //   accessoryExercises, 
//   //   splitDesign, 
//   //   splitDesign[3],
//   //   percentagesForWeightAdvice, 
//     oneRepMax,
//     oneRepMax[0],
//     oneRepMax[0].focusOneRepMax
//   );
// };

// function init() {
// setValues();};
// init();

// let setAdvice = `${splitDesign[3].repAdvice} at ${parseFloat(percentagesForWeightAdvice) * parseFloat (oneRepMax[0].focusOneRepMax)} lbs`;
// console.log(setAdvice);

// const setAdviceButton = document.getElementById('focusExerciseSetAdvice');
// setAdviceButton.textContent = setAdvice;
// // getElementByClass.dataset.name = 'setAdvice';
// // element.setAttribute('name', 'setAdvice');

function cardColumnCreator(numberOfColumns, focusSets,accessorySets){
  
  var beginning = document.getElementById("appendHere");
  console.log(beginning)
  for (let i = 0; i < numberOfColumns; i++) {    
    var first_col = document.createElement('div'); 
    first_col.classList.add('col-4');   
    console.log(first_col)
    var card = document.createElement('div');
    card.classList.add('card');   

    var cardBody = document.createElement('div');
    cardBody.classList.add('card-body'); 

    var outerContainer = document.createElement('div');
    outerContainer.setAttribute("id", "border");

    //Top Row
    var top_row = document.createElement('div.row');
    var day_col = document.createElement('div.col-4');
    var day_h = document.createElement('h1');
    day_h.textContent = "Day " + (i+1);

    day_col.appendChild(day_h);
    top_row.appendChild(day_col);
    outerContainer.appendChild(top_row);
    cardBody.appendChild(outerContainer);
    card.appendChild(cardBody);
    first_col.appendChild(card);
    beginning.appendChild(first_col);
  }
}

cardColumnCreator(1,0,0);