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
let accessoryExercises = [
    {dayOne: ""},
    {dayTwo: ""},
    {dayThree: ""},
    {dayFour: ""},
    {dayFive:  ""}];
  
const muscleGroupSelector = document.querySelector('#muscleGroupSelector');
// muscleGroupSelector.addEventListener("change", selectMuscleGroup); 

function selectMuscleGroup() {
  switch (document.getElementById("muscleGroupSelector").value) {
    case "chest":
      muscleGroup = muscleGroupSelector.value;
      focusExercise = "Bench Press";
      accessoryExercises = [
        {dayOne: "Tricep Extension"},
        {dayTwo: "Dumbbell Fly"},
        {dayThree: "Incline Bench Press"},
        {dayFour: "Dumbbell Press"},
        {dayFive:  "Chest Press"}];
      break;
    case "legs":
      muscleGroup = muscleGroupSelector.value;
        focusExercise = "Squat";
        accessoryExercises = [
          {dayOne: "Leg Press"},
          {dayTwo: "Leg Curl"},
          {dayThree: "Lunges"},
          {dayFour: "Leg Extension"},
          {dayFive:  "Calf Raise"}];
        // ];
          break;
    case "back":
      muscleGroup = muscleGroupSelector.value;
        focusExercise = "Deadlift";
        accessoryExercises = [
          {dayOne: "Romanian Deadlift"}, 
          {dayTwo: "Leg Curl"},
          {dayThree: "Pull Up"},
          {dayFour: "Bent Over Row"},
          {dayFive:  "Lat Pulldown"}];
        // ];
          break;
    case "shoulders":
      muscleGroup = muscleGroupSelector.value;
        focusExercise = "Overhead Press";
        accessoryExercises = [
          {dayOne: "Lateral Raise"}, 
          {dayTwo: "Front Raise"},
          {dayThree: "Rear Delt Fly"},
          {dayFour: "Shrug"},
          {dayFive:  "Arnold Press"}];
        // ];
          break;
    case "arms":
      muscleGroup = muscleGroupSelector.value;
        focusExercise = "Bicep Curl";
        accessoryExercises = [
          {dayOne: "Tricep Extension"}, 
          {dayTwo: "Hammer Curl"},
          {dayThree: "Skull Crusher"},
          {dayFour: "Preacher Curl"},
          {dayFive:  "Concentration Curl"}]
        // ];
          break;
    case "core":
      muscleGroup = muscleGroupSelector.value;
        focusExercise = "Plank";
        accessoryExercises = [
          {dayOne: "Russian Twist"}, 
          {dayTwo: "Leg Raise"},
          {dayThree: "Bicycle Crunch"},
          {dayFour: "Side Plank"},
          {dayFive:  "V-Up"}]
        // ];
          break;
        };
    return muscleGroup, focusExercise, accessoryExercises;
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
    // console.log(
      // userName, 
      // focusExercise, 
      // accessoryExercises, 
      // splitDesign, 
      // percentagesForWeightAdvice, 
      // oneRepMax
    // );
    localStorage.setItem('userName', userName);
    localStorage.setItem('muscleGroup', muscleGroup);
    localStorage.setItem('focusExercise', focusExercise);
    localStorage.setItem('accessoryExercises', JSON.stringify(accessoryExercises));
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