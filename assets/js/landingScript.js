let userName = "";
// <!-- WILL< THIS IS WHERE YOU STOPPED ON MONDAY NIGHT AND YOU HAVENT GOTTEN THE USERNAME TO BECOME AN OBJECT INDEX.HTML LINE 43 THEN DO THE SUBMIT BUTTON AND LOCAL STORAGE-->
const personalInfoForm = document.getElementById("personalInfoForm");
personalInfoForm.addEventListener("submit", setUserName);

const userNameGetter = document.getElementById("userNameGetter").value;
function setUserName(event) {
  event.preventDefault();
  // if (event.target.id==="userNameGetter") {
  console.log(typeof userNameGetter);
  console.log(userNameGetter);
  if (userNameGetter === "") {
    alert("Please enter a username");
  } else if (!isNAN(userNameGetter)) {
    alert("Please enter a valid username");
  } else {
    userName = userNameGetter;
  };
  console.log(userName);
  return userName;
};

let muscleGroup = [
  focusExercise = "",
  accessoryExercises = [
    dayOne = "",
    dayTwo = "",
    dayThree = "",
    dayFour = "",
    dayFive = ""]
  ];
  
const muscleGroupSelector = document.querySelector('#muscleGroupSelector');

muscleGroupSelector.addEventListener("change", selectMuscleGroup); 

function selectMuscleGroup() {
  switch (document.getElementById("muscleGroupSelector").value) {
    case "chest":
      muscleGroup = [
        focusExercise = "Bench Press",
        accessoryExercise = [
          dayOne = "Tricep Extension",
          dayTwo = "Dumbbell Fly",
          dayThree = "Incline Bench Press",
          dayFour = "Dumbbell Press",
          dayFive = "Chest Press"]];
      break;
    case "legs":
      muscleGroup = [
        focusExercise = "Squat",
        accessoryExercise = [
          dayOne = "Leg Press",
          dayTwo = "Leg Curl",
          dayThree = "Lunges",
          dayFour = "Leg Extension",
          dayFive = "Calf Raise"]];
          break;
    case "back":
      muscleGroup = [
        focusExercise = "Deadlift",
        accessoryExercise = [
          dayOne = "Romanian Deadlift", 
          dayTwo = "Leg Curl",
          dayThree = "Pull Up",
          dayFour = "Bent Over Row",
          dayFive = "Lat Pulldown"]];
          break;
    case "shoulders":
      muscleGroup = [
        focusExercise = "Overhead Press",
        accessoryExercise = [
          dayOne = "Lateral Raise", 
          dayTwo = "Front Raise",
          dayThree = "Rear Delt Fly",
          dayFour = "Shrug",
          dayFive = "Arnold Press"]];
          break;
    case "arms":
      muscleGroup = [
        focusExercise = "Bicep Curl",
        accessoryExercise = [
          dayOne = "Tricep Extension", 
          dayTwo = "Hammer Curl",
          dayThree = "Skull Crusher",
          dayFour = "Preacher Curl",
          dayFive = "Concentration Curl"]];
          break;
    case "core":
      muscleGroup = [
        focusExercise = "Plank",
        accessoryExercise = [
          dayOne = "Russian Twist", 
          dayTwo = "Leg Raise",
          dayThree = "Bicycle Crunch",
          dayFour = "Side Plank",
          dayFive = "V-Up"]];
          break;
        };
    console.log (muscleGroup);
    return muscleGroup;
  };


let splitDesign = [
  splitDaysTotal = "",
  setsPerDay = "",
  timerLengthPerDay = "",
  repAdvice = "",
  percentagesForWeightAdvice = []
  ];

const splitDesignSelector = document.querySelector('#splitDesignSelector');

  splitDesignSelector.addEventListener("change", selectSplitDesign); 

  function selectSplitDesign() {
    switch (document.getElementById("splitDesignSelector").value) { 
  case "three":
    splitDesign = [
      splitDaysTotal = 3,
      setsPerDay = 3,
      timerLengthPerDay = 60,
      repAdvice = "3 sets of 5 reps",
      percentagesForWeightAdvice = [0.65, 0.75, 0.85]];
    break;
  case "four":
    splitDesign = [
      splitDaysTotal = 4,
      setsPerDay = 4,
      timerLengthPerDay = 90,
      repAdvice = "4 sets of 5 reps",
      percentagesForWeightAdvice = [0.60, 0.70, 0.80, 0.90]];
    break;
  case "five":
    splitDesign = [
      splitDaysTotal = 5,
      setsPerDay = 5,
      timerLengthPerDay = 120,
      repAdvice = "5 sets of 5 reps",
      percentagesForWeightAdvice = [0.55, 0.65, 0.75, 0.85, 0.95]];
    break;
};
console.log (splitDesign);
return splitDesign;
};


let oneRepMax = [
  focusOneRepMax = "",
  accessoryOneRepMax = ""
];

const oneRepMaxGetter = document.querySelector('#oneRepMaxGetter');

  oneRepMaxGetter.addEventListener("submit", setOneRepMax); 

  function setOneRepMax(e) {
    e.preventDefault();
    switch (document.getElementById("oneRepMaxGetter").value) { 
  case (isNAN (document.getElementById("oneRepMaxGetter").value)):
    alert("Please enter a number");
    break;
  case (document.getElementById("oneRepMaxGetter").value < 0):
    alert("Please enter a positive number");
    break;
  case (document.getElementById("oneRepMaxGetter").value < 135):
    oneRepMax = [
      focusOneRepMax = "",
      accessoryOneRepMax = "15"];
    break;
  case (document.getElementById("oneRepMaxGetter").value < 225):
    oneRepMax = [
      focusOneRepMax = "",
      accessoryOneRepMax = "20"];
    break;
  case (document.getElementById("oneRepMaxGetter").value < 315):
    oneRepMax = [
      focusOneRepMax = "",
      accessoryOneRepMax = "25"];
    break;
  case (document.getElementById("oneRepMaxGetter").value < 405):
    oneRepMax = [
      focusOneRepMax = "",
      accessoryOneRepMax = "30"];
    break;
  case (document.getElementById("oneRepMaxGetter").value < 495):
    oneRepMax = [
      focusOneRepMax = "",
      accessoryOneRepMax = "35"];
    break;
  case (document.getElementById("oneRepMaxGetter").value < 495):
    alert("Please enter a reasonable number, you Meathead");
    break;
};
console.log (oneRepMax); 
return oneRepMax;
};

//!Set up Submit Button
// const submitButton = document.querySelector('#submitButton');

//   submitButton.addEventListener("click", submitForm);

//   function submitForm() {
//     if (userName === "") {
//       alert("Please enter a username");
//     } else if (muscleGroup === "") {
//       alert("Please select a muscle group");
//     } else if (splitDesign === "") {
//       alert("Please select a split design");
//     } else if (oneRepMax === "") {
//       alert("Please enter your one rep max");
//     } else {
//       alert("Your workout plan has been submitted");
//     };
//     console.log(userName, muscleGroup, splitDesign, oneRepMax);
//     return userName, muscleGroup, splitDesign, oneRepMax;
//   };