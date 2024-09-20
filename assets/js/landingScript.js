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
      makeAlert("Please enter a positive number");
      event.preventDefault();
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
    makeAlert("Please enter a reasonable number, you Meathead");
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
    makeAlert("Please enter a username");
    event.preventDefault();
    break;
  case (muscleGroup === ""):
    makeAlert("Please select a muscle group");
    event.preventDefault();
    break;
  case (splitDesign === ""):
    makeAlert("Please select a split design");
    event.preventDefault();
    break;
  case (oneRepMax === ""):
    makeAlert("Please enter your one rep max");
    event.preventDefault();
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

function makeAlert(text){
  let modal = document.createElement('div');
  modal.classList.add('modal');

  let modalDialog = document.createElement('div');
  modalDialog.classList.add('modal-dialog');

  let modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  let modalHeader = document.createElement('div');
  modalHeader.classList.add('modal-header');

  let modalTitle = document.createElement('h5');
  modalTitle.classList.add('modal-title');
  modalTitle.textContent = "Error";

  let X = document.createElement('button');
  X.classList.add('btn-close');
  X.setAttribute("type", "button");
  X.setAttribute("data-bs-dismiss", "modal");
  X.setAttribute("aria-label", "Close"); 

  let modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');

  let modalTextContent = document.createElement('p');
  modalTextContent.textContent = text;

  //let modalFooter = document.createElement('div');
  //modalFooter.classList.add('modal-footer');

  modal.appendChild(modalDialog);
  modalDialog.appendChild(modalContent);  

  modalContent.appendChild(modalHeader);
  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(X);

  modalContent.appendChild(modalBody);
  modalBody.appendChild(modalTextContent);
  //modal.appendChild(modalFooter);

  
  var myModal = new bootstrap.Modal(modal, {
    keyboard: false
  })
  myModal.show()
}
