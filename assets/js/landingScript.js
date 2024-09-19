const personalInfoForm = document.getElementById("personalInfoForm");
personalInfoForm.addEventListener("submit", getUserName);

let userName = "";

function getUserName(event) {
  const userNameGetter = document.getElementById("userNameGetter").value;
  userName = userNameGetter;
  return userName;
};

let muscleGroup = "";
let focusExercise = "";
let accessoryExercisesArray = [];
  
const muscleGroupSelector = document.querySelector('#muscleGroupSelector');
// muscleGroupSelector.addEventListener("change", selectMuscleGroup); 

function selectMuscleGroup() {
  switch (document.getElementById("muscleGroupSelector").value) {
    case "chest":
      muscleGroup = muscleGroupSelector.value;
      focusExercise = "Bench Press";
      accessoryExercisesArray = ["Tricep Extension", "Dumbbell Fly", "Incline Bench Press", "Dumbbell Press", "Chest Press"];
      break;
    case "legs":
      muscleGroup = muscleGroupSelector.value;
        focusExercise = "Squat";
        accessoryExercisesArray = ["Leg Press", "Leg Curl", "Lunges", "Leg Extension", "Calf Raise"];
          break;
    case "back":
      muscleGroup = muscleGroupSelector.value;
        focusExercise = "Deadlift";
        accessoryExercisesArray = ["Romanian Deadlift", "Leg Curl", "Pull Up", "Bent Over Row", "Lat Pulldown"];
          break;
    case "shoulders":
      muscleGroup = muscleGroupSelector.value;
        focusExercise = "Overhead Press";
        accessoryExercisesArray = ["Lateral Raise", "Front Raise", "Rear Delt Fly", "Shrug", "Arnold Press"];
          break;
    case "arms":
      muscleGroup = muscleGroupSelector.value;
        focusExercise = "Bicep Curl";
        accessoryExercisesArray = ["Tricep Extension", "Hammer Curl", "Skull Crusher", "Preacher Curl", "Concentration Curl"];
          break;
    case "core":
      muscleGroup = muscleGroupSelector.value;
        focusExercise = "Plank";
        accessoryExercisesArray = ["Russian Twist", "Leg Raise", "Bicycle Crunch", "Side Plank", "V-Up"];
          break;
        };
    return muscleGroup, focusExercise, accessoryExercisesArray;
  };


let splitDesign = [
  {timerLengthPerDay: ""},
  {splitDaysTotal: ""},
  {setsPerDay: ""},
  {repAdvice: ""}];
let percentagesForWeightAdvice = [];

const splitDesignSelector = document.querySelector('#splitDesignSelector');
  // splitDesignSelector.addEventListener("change", selectSplitDesign); 

  function selectSplitDesign() {
    switch (splitDesignSelector.value) { 
  case "three":
    splitDesign = [
      {timerLengthPerDay: 60},
      {splitDaysTotal: 3},
      {setsPerDay: 3},
      {repAdvice: 7}];
      percentagesForWeightAdvice = [0.65, 0.75, 0.85];
    break;
  case "four":
    splitDesign = [
      {timerLengthPerDay: 90},
      {splitDaysTotal: 4},
      {setsPerDay: 4},
      {repAdvice: 6}],
      percentagesForWeightAdvice = [0.60, 0.70, 0.80, 0.90];
    break;
  case "five":
    splitDesign = [
      {timerLengthPerDay: 120},
      {splitDaysTotal: 5},
      {setsPerDay: 5},
      {repAdvice: 5}],
      percentagesForWeightAdvice = [0.55, 0.65, 0.75, 0.85, 0.95];
    break;
};
};


let oneRepMax = [
  {focusOneRepMax: ""},
  {accessoryOneRepMax: ""}
];

function setOneRepMax(event) {
  const oneRepMaxSetter = parseInt(document.getElementById("oneRepMaxSetter").value);

  switch (true) { 
    // case (isNAN (oneRepMaxSetter)):
    //   alert("Please enter a number");
    //   break;
    case (oneRepMaxSetter <= 0):
      alert("Please enter a positive number");
      break;
    case (oneRepMaxSetter <= 135):
    oneRepMax = [
      {focusOneRepMax: oneRepMaxSetter},
      {accessoryOneRepMax: 15}];
      break;
  case (oneRepMaxSetter <= 225):
    oneRepMax = [
      {focusOneRepMax: oneRepMaxSetter},
      {accessoryOneRepMax: 20}];
    break;
  case (oneRepMaxSetter <= 315):
    oneRepMax = [
      {focusOneRepMax: oneRepMaxSetter},
      {accessoryOneRepMax: 25}];
    break;
  case (oneRepMaxSetter <= 405):
    oneRepMax = [
      {focusOneRepMax: oneRepMaxSetter},
      {accessoryOneRepMax: 30}];
    break;
  case (oneRepMaxSetter <= 495):
    oneRepMax = [
      {focusOneRepMax: oneRepMaxSetter},
      {accessoryOneRepMax: 35}];
    break;
  case (oneRepMaxSetter > 495):
    alert("Please enter a reasonable number, you Meathead");
    event.preventDefault();
    break;
};
return oneRepMax;
};

const submitButton = document.querySelector('#submitButton');
submitButton.addEventListener("click", submitForm);

function submitForm(event) {
  event.preventDefault();
  getUserName();
  selectMuscleGroup();
  selectSplitDesign();
  setOneRepMax();
  // if (email === '') {
  //   displayMessage('error', 'Email cannot be blank');
  // } else if (password === '') {
  //   displayMessage('error', 'Password cannot be blank');
  // } else {
  //   displayMessage('success', 'Registered successfully');
    switch (true) {
  case (userName === ""):
    alert("Please enter a username");
    break;
  case (muscleGroup === ""):
    alert("Please select a muscle group");
    break;
  case (splitDesign === ""):
    alert("Please select a split design");
    break;
  case (oneRepMax === ""):
    alert("Please enter your one rep max");
    break;
  default:
    localStorage.setItem('userName', userName);
    localStorage.setItem('muscleGroup', muscleGroup);
    localStorage.setItem('focusExercise', focusExercise);
    localStorage.setItem('accessoryExercisesArray', JSON.stringify(accessoryExercisesArray));
    localStorage.setItem('splitDesign', JSON.stringify(splitDesign));
    localStorage.setItem('percentagesForWeightAdvice', JSON.stringify(percentagesForWeightAdvice));
    localStorage.setItem('oneRepMax', JSON.stringify(oneRepMax));
    break;
  };
  redirectPage()
};  

  
  function redirectPage() {
      redirectURL = "./weekOneIndex.html";  
      location.assign(redirectURL);
  };