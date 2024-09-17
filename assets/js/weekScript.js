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

  function setValues() {
  userName = localStorage.getItem('userName');
  muscleGroup = localStorage.getItem('muscleGroup');
  focusExercise = localStorage.getItem('focusExercise');
  accessoryExercises = JSON.parse(localStorage.getItem('accessoryExercises'));
  splitDesign = JSON.parse(localStorage.getItem('splitDesign'));
  percentagesForWeightAdvice = JSON.parse(localStorage.getItem('percentagesForWeightAdvice'));
  oneRepMax = JSON.parse(localStorage.getItem('oneRepMax'));

  console.log(
  //   userName, 
  //   muscleGroup, 
  //   focusExercise, 
  //   accessoryExercises, 
  //   splitDesign, 
  //   splitDesign[3],
  //   percentagesForWeightAdvice, 
    oneRepMax,
    oneRepMax[0],
    oneRepMax[0].focusOneRepMax
  );
};

function init() {
setValues();};
init();

let setAdvice = `${splitDesign[3].repAdvice} at ${parseFloat(percentagesForWeightAdvice) * parseFloat (oneRepMax[0].focusOneRepMax)} lbs`;
console.log(setAdvice);

const setAdviceButton = document.getElementById('focusExerciseSetAdvice');
setAdviceButton.textContent = setAdvice;
// getElementByClass.dataset.name = 'setAdvice';
// element.setAttribute('name', 'setAdvice');

function cardColumnCreator(numberOfColumns, focusSets,accessorySets){
  for (let i = 1; i < numberOfColumns; i++) {    
    var first_col = document.createElement('div.col');
    var card = document.createElement('div.card');
    var cardBody = document.createElement('div.card-body');
    var outerContainer = document.createElement('div');
    outerContainer.classList.add('');
  }
}

cardColumnCreator(2,0)