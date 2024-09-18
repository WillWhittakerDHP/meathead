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
return userName, muscleGroup, focusExercise, accessoryExercises, splitDesign, percentagesForWeightAdvice, oneRepMax;
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
  //   oneRepMax[0].focusOneRepMax
  );
};

function init() {
setValues();
// setTimer();
// setFocusSetAdviceButtonContent();
};

init();



  const setAdviceButton = document.getElementById('focusExerciseSetAdvice');
  setAdviceButton.textContent = `Set #decremented#: ${splitDesign[3].repAdvice} reps at ${parseFloat(percentagesForWeightAdvice) * parseFloat (oneRepMax[0].focusOneRepMax)} lbs`;
  setAdviceButton.addEventListener("click", runTimer);


// function setTimer() {
  const timer = document.querySelector('#timer');
  const secondsPerSet = splitDesign[0].timerLengthPerDay;
  timer.textContent = secondsPerSet;
  // timer.textContent = secondsLeft;
  // return timer;
  // };
  let secondsLeft = splitDesign[0].timerLengthPerDay;
  
  function runTimer() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      resetTimer();
      }
    }, 1000);
};

function resetTimer() {
  secondsLeft = secondsPerSet;
  console.log(secondsLeft)
  timer.textContent = secondsPerSet;
  // setTimer();
};



