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
  for (let i = 1; i < numberOfColumns; i++) {    
    var first_col = document.createElement('div'); 
    first_col.classList.add('col-4');   
    console.log(first_col)
    var card = document.createElement('div');
    card.classList.add('card');   

    var cardBody = document.createElement('div');
    cardBody.classList.add('card-body'); 

    var outerContainer = document.createElement('div');
    outerContainer.classList.add('container','text-center'); 
    outerContainer.setAttribute("id", "border");

    //Top Row
    var top_row = document.createElement('div');
    top_row.classList.add('row'); 

    var day_col = document.createElement('div');
    day_col.classList.add('col-4'); 
    day_col.setAttribute("id", "vertRightBorder");

    var day_h = document.createElement('h1');
    day_h.setAttribute("id", "dayTimer");
    day_h.textContent = "Day " + (i+1);

    var timer_col_big = document.createElement('div');
    timer_col_big.classList.add('col'); 
    timer_col_big.setAttribute("id", "vertLeftBorder");

    var row_timer = document.createElement('div');
    row_timer.classList.add('row'); 

    var row_timer_col_h = document.createElement('div');
    row_timer_col_h.classList.add('col'); 

    var timer_h = document.createElement('h1');
    timer_h.setAttribute("id", "dayTimer");
    timer_h.textContent = "Timer:";

    var row_timer_col_p = document.createElement('div');
    row_timer_col_p.classList.add('col');

    var timer_p = document.createElement('p');
    timer_p.setAttribute("id", "timer");
    timer_p.textContent = "1:00";
    //Top Row done

    // Buttons Grid
    var buttons_container = document.createElement('div');
    buttons_container.classList.add('container','text-center');
    buttons_container.setAttribute("id", "cardContent");

    // THIS IS WHERE WE ADD BUTTONS
    // APPEND CHILD ON BUTTON ROW WITH COL AND BUTTON
    var button_top_row = document.createElement('div');
    button_top_row.classList.add('row','gx-5');
    button_top_row.setAttribute("id", "buttonGridTop"); 
    button_top_row.textContent = "EXAMPLE TEXT"

    // APPEND CHILD ON BUTTON ROW WITH COL AND BUTTON
    var button_bottom_row = document.createElement('div');
    button_bottom_row.classList.add('row','gx-5');
    button_bottom_row.setAttribute("id", "buttonGridBottom"); 
    button_bottom_row.textContent = "EXAMPLE TEXT"

    // End buttons Grid
    //  Notes
    var note_form = document.createElement('form');
    note_form.classList.add('row','gx-2','align-items-center');
    note_form.setAttribute("id", "notesForm"); 

    var note_col = document.createElement('div');
    note_col.classList.add('col','align-items-center');

    var note_label = document.createElement('label');
    note_label.setAttribute("for", "notes"); 
    note_label.setAttribute("id", "noteSize"); 
    note_label.textContent = "Notes"

    var note_textarea = document.createElement('textarea');
    note_textarea.classList.add('form-control');
    note_textarea.setAttribute("id", "notes"); 
    // End Notes
    // Accessory Excercises
    var acc_exercises = document.createElement('div');
    acc_exercises.classList.add('row','justify-content-md-center');
    acc_exercises.setAttribute("id", "accessoryGridTop"); 
    acc_exercises.textContent = "Accessory Exercises"

     // APPEND CHILD ON BUTTON ROW WITH COL AND BUTTON
    var acc_button_row = document.createElement('div');
    acc_button_row.classList.add('row','gx-5');
    acc_button_row.setAttribute("id", "accessoryGridBottom"); 
    acc_button_row.textContent = "EXAMPLE TEXT"
    // End Accessory 
    // Cardio
    var cardio_form = document.createElement('form');
    cardio_form.classList.add('row','justify-content-md-center');
    cardio_form.setAttribute("id", "cardioForm"); 

    var cardio_col = document.createElement('div');
    cardio_col.classList.add('col-6');

    var cardio_row = document.createElement('div');
    cardio_row.classList.add('row','g-0','justify-content-md-center');

    var cardio_label = document.createElement('label');
    cardio_label.classList.add('col');
    cardio_label.setAttribute("for", "cardio"); 
    cardio_label.setAttribute("style", "font-size: 35px;"); 
    cardio_label.textContent = "Cardio";

    var cardio_button = document.createElement('button');
    cardio_button.classList.add('btn','btn-outline-primary');
    cardio_button.setAttribute("id", "cardio"); 
    cardio_button.textContent = "Something"; 
    //Cardio done
    //Complete Button
    var complete_row = document.createElement('div');
    complete_row.classList.add('row','justify-content-md-center');
    complete_row.setAttribute("id", "complete"); 

    var complete_col = document.createElement('div');
    complete_col.classList.add('col-70');

    var complete_button = document.createElement('button');
    complete_button.classList.add('btn','btn-primary','btn-lg');
    complete_button.textContent = "Complete";
    //Complete Done


  


    
    outerContainer.appendChild(top_row);
    cardBody.appendChild(outerContainer);
    card.appendChild(cardBody);
    first_col.appendChild(card);
    beginning.appendChild(first_col);

    //top row append
    top_row.appendChild(day_col);
    day_col.appendChild(day_h);
    top_row.appendChild(timer_col_big);
    timer_col_big.appendChild(row_timer);
    row_timer.appendChild(row_timer_col_h);
    row_timer_col_h.appendChild(timer_h);
    row_timer.appendChild(row_timer_col_p);
    row_timer_col_p.appendChild(timer_p);

    //button grid append
    outerContainer.appendChild(buttons_container);
    buttons_container.appendChild(button_top_row);
    buttons_container.appendChild(button_bottom_row);

    //notes append
    outerContainer.appendChild(note_form);
    note_form.appendChild(note_col);
    note_col.appendChild(note_label);
    note_col.appendChild(note_textarea);
    //accessory append
    outerContainer.appendChild(acc_exercises)
    acc_exercises.appendChild(acc_button_row);
    //cardio append
    outerContainer.appendChild(cardio_form)
    cardio_form.appendChild(cardio_col);
    cardio_col.appendChild(cardio_row);
    cardio_row.appendChild(cardio_label);
    cardio_row.appendChild(cardio_button);

    //complete append
    outerContainer.appendChild(complete_row);
    complete_row.appendChild(complete_col);
    complete_col.appendChild(complete_button);
  }
}

cardColumnCreator(6,0,0);
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

