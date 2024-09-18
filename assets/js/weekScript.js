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
    // splitDesign[0].timerLengthPerDay,
  //   splitDesign[3],
  //   percentagesForWeightAdvice, 
  //   oneRepMax,
  //   oneRepMax[0],
  //    oneRepMax[0].focusOneRepMax
  );
};

function init() {
setValues();
// setTimer();
};

init();


const timeEl = document.querySelector('#timer');
let secondsLeft = splitDesign[0].timerLengthPerDay;

function setTimer() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      setInterval(splitDesign[0].timerLengthPerDay);
    }
  }, 1000);
};

let setAdvice = `Set #decremented# ${splitDesign[3].repAdvice} reps at ${parseFloat(percentagesForWeightAdvice) * parseFloat (oneRepMax[0].focusOneRepMax)} lbs`;
console.log(setAdvice);

const setAdviceButton = document.getElementById('focusExerciseSetAdvice');
setAdviceButton.textContent = setAdvice;
setAdviceButton.addEventListener("click", setTimer);

