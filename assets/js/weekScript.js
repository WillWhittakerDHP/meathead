
/* ORIGINAL BEFORE WILL FUCKED AROUND
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
  };

setGreeting = function() {
let headerUserName = document.getElementById('headerUserName');
headerUserName.textContent = `Welcome, ${userName}!`;
let headerWeekNumber = document.getElementById('headerWeekNumber');
let upperCaseMuscleGroup = muscleGroup.toUpperCase();
headerWeekNumber.textContent = `${upperCaseMuscleGroup} Week One`;
};

function init() {
setValues();
setGreeting();
};

init();

//These set up the buttons for the focus exercise section

  const focusExerciseSetAdviceButton = document.getElementById('focusExerciseSetAdviceButton');
    
  focusExerciseSetAdviceButton.textContent = `Set #decremented#: ${splitDesign[3].repAdvice} reps at ${parseFloat(percentagesForWeightAdvice) * parseFloat (oneRepMax[0].focusOneRepMax)} lbs`;

  focusExerciseSetAdviceButton.addEventListener("click", function() {
    //   event.stopPropagation(),
    buttonClickLogic()
  })
    
  const buttonClickLogic =function() {
    if (!focusExerciseSetAdviceButton.dataset.disabled) {
      runTimer(),
      focusExerciseSetAdviceButton.setAttribute("disabled","true");
    } else if (allFocusSetAdviceButtons.disabled = "true") {
      focusSectionDisabled();
    }
  };


  //I'm trying to find a way to tell is ALL of the button of a certain type are disabled, but I'm not sure how to do that yet.
  let focusExerciseSetAdviceButtonCondition = [
    focusExerciseSetAdviceButton.dataset.disabled
  ]


//These set up the buttons for the focus accessory section
  const accessoryExerciseSetAdviceButton = document.getElementById('accessoryExerciseSetAdviceButton');
    
  accessoryExerciseSetAdviceButton.textContent = `Set #decremented#: 5 reps at ${ (oneRepMax[1].accessoryOneRepMax)} lbs`;

  accessoryExerciseSetAdviceButton.addEventListener("click", function() {
    //   event.stopPropagation(),
    accessoryButtonClickLogic()
  })
    
  const accessoryButtonClickLogic =function() {
    if (accessoryExerciseSetAdviceButton.disabled = "false") {
      accessoryExerciseSetAdviceButton.setAttribute("disabled","true");
    } else if (allAccessorySetAdviceButtons.disabled = "true") {
      accessorySectionDisabled();
    }
  };


// TIMER FUNCTIONS
  const timer = document.querySelector('#timer');
  const secondsPerSet = splitDesign[0].timerLengthPerDay;
  let secondsLeft = splitDesign[0].timerLengthPerDay;
  timer.textContent = secondsLeft;

  const runTimer = function () {
    let timerInterval = setInterval(function () {
      secondsLeft--;
      timer.textContent = secondsLeft;
      if (secondsLeft === -1) {
        clearInterval(timerInterval);
        secondsLeft = secondsPerSet;
        timer.textContent = secondsLeft;
        setInterval(secondsPerSet);
        }
      }, 
    1000);
  };


/*
let numberOfColumns = splitDesign[1].splitDaysTotal;

function cardColumnCreator(numberOfColumns, focusSets,accessorySets){
  
  var beginning = document.getElementById("appendHere");

  for (let i = 1; i < numberOfColumns; i++) {    
    var first_col = document.createElement('div'); 
    first_col.classList.add('col-4');   

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

    var timer = document.createElement('p');
    timer.setAttribute("id", "timer");
    timer.textContent = secondsLeft;
    /* 
    timer.textContent = "1:00";    
    
    saving a copy og the above code for reference -Will
    
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
    button_top_row.textContent = `Set #decremented#: ${splitDesign[3].repAdvice} reps at ${parseFloat(percentagesForWeightAdvice) * parseFloat (oneRepMax[0].focusOneRepMax)} lbs`;

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
    row_timer_col_p.appendChild(timer);

commented out while fixing the timer -Will
*/   
//  row_timer_col_p.appendChild(timer_p);
/*

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
*/

let userName = "";
let muscleGroup = "";
let focusExercise = "";
// let accessoryExercises = [
//   {dayOne: ""},
//   {dayTwo: ""},
//   {dayThree: ""},
//   {dayFour: ""},
//   {dayFive:  ""}];
  let accessoryExercisesArray = [];
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
  // accessoryExercises = JSON.parse(localStorage.getItem('accessoryExercises'));
  accessoryExercisesArray = JSON.parse(localStorage.getItem('accessoryExercisesArray'));
  splitDesign = JSON.parse(localStorage.getItem('splitDesign'));
  percentagesForWeightAdvice = JSON.parse(localStorage.getItem('percentagesForWeightAdvice'));
  oneRepMax = JSON.parse(localStorage.getItem('oneRepMax'));
  return userName, muscleGroup, focusExercise, accessoryExercisesArray, splitDesign, percentagesForWeightAdvice, oneRepMax;
};

setGreeting = function() {
let headerUserName = document.getElementById('headerUserName');
headerUserName.textContent = `Welcome, ${userName}!`;
let headerWeekNumber = document.getElementById('headerWeekNumber');
let upperCaseMuscleGroup = muscleGroup.toUpperCase();
headerWeekNumber.textContent = `${upperCaseMuscleGroup} Week One`;
};

    
function cardColumnCreator(){
  
  let beginning = document.getElementById("appendHere");
  let numberOfColumns = splitDesign[1].splitDaysTotal;
  let secondsLeft = splitDesign[0].timerLengthPerDay;

  for (let i = 0; i < numberOfColumns; i++) {
    
    let colAtIndex = document.createElement('div'); 
    colAtIndex.classList.add('col-4');   
    
    let card = document.createElement('div');
    card.classList.add('card'); 
    card.setAttribute("id", "card");  
    
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body'); 
    
    let outerContainer = document.createElement('div');
    outerContainer.classList.add('container','text-center'); 
    outerContainer.setAttribute("id", "border");
    
    //Card Label Section
    let labelForCardAtIndex = document.createElement('div');
    labelForCardAtIndex.classList.add('row'); 
    
    let cardAtIndex = document.createElement('div');
    cardAtIndex.classList.add('col-4'); 
    cardAtIndex.setAttribute("id", "vertRightBorder");
    
    let dayNameForCardAtIndex = document.createElement('h4');
    // dayNameForCardAtIndex.setAttribute("id", "dayTimer");
    dayNameForCardAtIndex.textContent = "Day " + (i+1);
    
// Timer Sub-section
    let timerSubSectionInsideLabel = document.createElement('div');
    timerSubSectionInsideLabel.classList.add('col'); 
    timerSubSectionInsideLabel.setAttribute("id", "vertLeftBorder");

    let timerRowOrienter = document.createElement('div');
    timerRowOrienter.classList.add('row'); 

    let timerColumnOrienter = document.createElement('div');
    timerColumnOrienter.classList.add('col'); 

    let timerLabel = document.createElement('h4');
    // timerLabel.setAttribute("id", "dayTimer");
    timerLabel.textContent = "Timer:";

    let timerActualContainer = document.createElement('div');
    timerActualContainer.classList.add('col');

    let timer = document.createElement('h4');
    // timer.setAttribute("id", "timer");
    timer.textContent = secondsLeft;
    
    // Focus Exercise Button Container
    let containerForTheFocusExerciseButtons = document.createElement('div');
    containerForTheFocusExerciseButtons.classList.add('container','text-center');
    containerForTheFocusExerciseButtons.setAttribute("id", "cardContent");
    containerForTheFocusExerciseButtons.setAttribute("id","buttonGrid");
    containerForTheFocusExerciseButtons.setAttribute("enabled","true");

    
    //Start Appending and Nesting Buttons
    cardAtIndex.appendChild(dayNameForCardAtIndex);
    labelForCardAtIndex.appendChild(cardAtIndex);
    outerContainer.appendChild(labelForCardAtIndex);
    
    // /*
    //top row append
    labelForCardAtIndex.appendChild(timerSubSectionInsideLabel);
    timerSubSectionInsideLabel.appendChild(timerRowOrienter);
    timerRowOrienter.appendChild(timerColumnOrienter);
    timerColumnOrienter.appendChild(timerLabel);
    timerRowOrienter.appendChild(timerActualContainer);
    timerActualContainer.appendChild(timer);
    // timerActualContainer.appendChild(timer_p);

    let nameOfTheFocusExercise = document.createElement('h5');
    nameOfTheFocusExercise.textContent = focusExercise;
    labelForCardAtIndex.appendChild(nameOfTheFocusExercise);
    
      const runTimer = function () {
        const secondsPerSet = splitDesign[0].timerLengthPerDay;
        let timerInterval = setInterval(function () {
          secondsLeft--;
          timer.textContent = secondsLeft;
          if (secondsLeft === -1) {
            clearInterval(timerInterval);
            secondsLeft = secondsPerSet;
            timer.textContent = secondsLeft;
            setInterval(secondsPerSet);
          }
        }, 
        1000);
      };

      //!AAAAAAAAAAAAAAAAAAAA
    // Buttons for Focus Exercise
  let numberOfFocusExerciseButtons = splitDesign[2].setsPerDay;
  let enabledValueofAllFocusButtonsAtIndexOnThisCard = [];

  for (let i = 0; i < numberOfFocusExerciseButtons; i++)
    {
      let buttonAtIndex = document.createElement('button');
      buttonAtIndex.setAttribute("name", "button" + i);
      buttonAtIndex.setAttribute("enabled", "true");
      // buttonAtIndex.textContent = `Set ` + (i+1) + `: ${splitDesign[3].repAdvice} reps at ${parseFloat(percentagesForWeightAdvice) * parseFloat (oneRepMax[0].focusOneRepMax)} lbs`;
      buttonAtIndex.textContent = `D`;
      buttonAtIndex.classList.add('btn','btn-primary','btn-sm','col-4');

      buttonAtIndex.addEventListener("click", function() {
        buttonAtIndex.setAttribute("enabled","false");
        enabledValueofAllFocusButtonsAtIndexOnThisCard.push(buttonAtIndex.getAttribute('enabled'));
        if (enabledValueofAllFocusButtonsAtIndexOnThisCard.length >= numberOfFocusExerciseButtons) {
          containerForTheFocusExerciseButtons.setAttribute("enabled","false");
        }
        console.log(containerForTheFocusExerciseButtons.getAttribute("enabled"));
        }
      );    

      containerForTheFocusExerciseButtons.appendChild(buttonAtIndex);
      outerContainer.appendChild(containerForTheFocusExerciseButtons);
    }
// End Focus Exercise Button Container

    cardBody.appendChild(outerContainer);
    card.appendChild(cardBody);
    colAtIndex.appendChild(card);
    beginning.appendChild(colAtIndex);
    //  Notes
    let note_form = document.createElement('form');
    note_form.classList.add('row','gx-2','align-items-center');
    note_form.setAttribute("id", "notesForm"); 
    
    let note_col = document.createElement('div');
    note_col.classList.add('col','align-items-center');
    
    let note_label = document.createElement('h5');
    // note_label.setAttribute("for", "notes"); 
    // note_label.setAttribute("id", "noteSize"); 
    note_label.textContent = "Notes"
    
    let note_textarea = document.createElement('textarea');
    note_textarea.classList.add('form-control');
    note_textarea.setAttribute("id", "notes"); 
    // End Notes
    outerContainer.appendChild(note_form);
    note_form.appendChild(note_col);
    note_col.appendChild(note_label);
    note_col.appendChild(note_textarea);

    // Accessory Exercise Button Container
    let containerForTheAccessoryExercises = document.createElement('div');
    containerForTheAccessoryExercises.classList.add('container','text-center');
    containerForTheAccessoryExercises.setAttribute("id", "cardContent");
    containerForTheAccessoryExercises.setAttribute("id", "buttonGrid");
    
    //Start Appending and Nesting Buttons

    // Buttons for Focus Exercise
    let containerForTheAccessoryExerciseButtons = document.createElement('div');
    containerForTheAccessoryExerciseButtons.classList.add('row','justify-content-md-center');
    containerForTheAccessoryExerciseButtons.setAttribute("id", "accessoryGridTop"); 
    containerForTheAccessoryExerciseButtons.setAttribute("enabled","true");

    let nameOfTheAccessoryExercise = document.createElement('h5');
    nameOfTheAccessoryExercise.textContent = accessoryExercisesArray[i];
    containerForTheAccessoryExerciseButtons.appendChild(nameOfTheAccessoryExercise)

      // APPEND CHILD ON BUTTON ROW WITH COL AND BUTTON
    let acc_button_row = document.createElement('div');
    acc_button_row.classList.add('row','gx-5');
    acc_button_row.setAttribute("id", "accessoryGridBottom"); 
    // End Accessory 

  let numberOfAccessoryExerciseButtons = 3;
  let enabledValueofAllAccessoryButtonsAtIndexOnThisCard = [];

  for (let i = 0; i < numberOfAccessoryExerciseButtons; i++)
    {
      let buttonAtIndex = document.createElement('button');
      buttonAtIndex.setAttribute("name", "button" + i);
      buttonAtIndex.setAttribute("enabled", "true");
      buttonAtIndex.textContent = `Set ` + (i+1) + `: 5 reps at ${oneRepMax[1].accessoryOneRepMax} lbs`;
      buttonAtIndex.classList.add('btn','btn-primary','btn-sm','col-4');
      
      buttonAtIndex.addEventListener("click", function() {
        buttonAtIndex.setAttribute("enabled","false");
        enabledValueofAccessoryAllButtonsAtIndexOnThisCard.push(buttonAtIndex.getAttribute('enabled'));
        if (enabledValueofAllAccessoryButtonsAtIndexOnThisCard.length >= numberOfAccessoryExerciseButtons) {
          containerForTheAccessoryExerciseButtons.setAttribute("enabled","false");
        }
        console.log(containerForTheAccessoryExerciseButtons.getAttribute("enabled"));
        }
      );    
      
      containerForTheAccessoryExerciseButtons.appendChild(buttonAtIndex);
      outerContainer.appendChild(containerForTheAccessoryExerciseButtons);
  }
  outerContainer.appendChild(containerForTheAccessoryExerciseButtons)
  containerForTheAccessoryExerciseButtons.appendChild(acc_button_row);

  let cardio_form = document.createElement('form');
    cardio_form.classList.add('row','justify-content-md-center');
    cardio_form.setAttribute("id", "cardioForm"); 

    let cardio_col = document.createElement('div');
    cardio_col.classList.add('col-6');

    let cardio_row = document.createElement('div');
    cardio_row.classList.add('row','g-0','justify-content-md-center');

    let cardio_label = document.createElement('h5');
    cardio_label.classList.add('col');
    // cardio_label.setAttribute("for", "cardio"); 
    // cardio_label.setAttribute("style", "font-size: 35px;"); 
    cardio_label.textContent = "Cardio";

    let cardio_button = document.createElement('input', 'time');
    // cardio_button.classList.add('btn','btn-outline-primary');
    cardio_button.setAttribute("id", "cardio"); 

  outerContainer.appendChild(cardio_form)
  cardio_form.appendChild(cardio_col);
  cardio_col.appendChild(cardio_row);
  cardio_row.appendChild(cardio_label);
  cardio_row.appendChild(cardio_button);
};
};

function init() {
  setValues();
  cardColumnCreator(); 
  setGreeting();
};

init();

