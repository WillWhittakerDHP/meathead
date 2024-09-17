let userName = "";

let muscleGroup = [
  focusExercise = "",
  accessoryExercises = [
    dayOne = "",
    dayTwo = "",
    dayThree = "",
    dayFour = "",
    dayFive = ""]
  ];
  
  let splitDesign = [
    splitDaysTotal = "",
    setsPerDay = "",
    timerLengthPerDay = "",
    repAdvice = "",
    percentagesForWeightAdvice = []
    ];
  
    let oneRepMax = [
      focusOneRepMax = "",
      accessoryOneRepMax = ""
    ];      

function setValues() {
  userName = localStorage.getItem('userName', JSON.stringify(userName));
  muscleGroup = JSON.parse(localStorage.getItem('muscleGroup', JSON.stringify(muscleGroup)));
  splitDesign = JSON.parse(localStorage.getItem('splitDesign', JSON.stringify(splitDesign)));
  oneRepMax = localStorage.getItem('oneRepMax', JSON.stringify(oneRepMax));

  console.log(
    // userName, muscleGroup, splitDesign, oneRepMax, 
    accessoryExercises, percentagesForWeightAdvice);
};

setValues();