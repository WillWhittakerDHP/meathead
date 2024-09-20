let userName = "";
let muscleGroup = "";
let focusExercise = "";
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
  beginning.classList.add('justify-content-center');
  let numberOfColumns = splitDesign[1].splitDaysTotal;
  let secondsLeft = splitDesign[0].timerLengthPerDay;
  
  for (let i = 0; i < numberOfColumns; i++) {
    
    let colAtIndex = document.createElement('div'); 
    if(numberOfColumns === 3){
      colAtIndex.classList.add('col-6');  
    }
    else if(numberOfColumns === 4){
      colAtIndex.classList.add('col-6');  
    }
    else{
      colAtIndex.classList.add('col-4');
    }  
    
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
    
    // Focus Exercise Button Container
    let containerForTheFocusExerciseButtons = document.createElement('div');
    containerForTheFocusExerciseButtons.classList.add('container','text-center');
    containerForTheFocusExerciseButtons.setAttribute("id", "cardContent");
    containerForTheFocusExerciseButtons.setAttribute("id","buttonGrid");
    containerForTheFocusExerciseButtons.setAttribute("disabled","true");

    
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
    
    // Buttons for Focus Exercise
    let numberOfFocusExerciseButtons = splitDesign[2].setsPerDay;
    let disabledValueofAllFocusButtonsAtIndexOnThisCard = [];
    
    for (let i = 0; i < numberOfFocusExerciseButtons; i++)
      {
      let buttonAtIndex = document.createElement('button');
      buttonAtIndex.setAttribute("name", "button" + i);
      buttonAtIndex.textContent = `Set ` + (i+1) + `: \n${splitDesign[3].repAdvice} reps at ${parseFloat(percentagesForWeightAdvice).toFixed(0) * parseFloat (oneRepMax[0].focusOneRepMax)} lbs`;
      buttonAtIndex.classList.add('btn','btn-primary','btn-sm','col-4');

      buttonAtIndex.addEventListener("click", function() {
        buttonAtIndex.setAttribute("disabled","true");
        runTimer();
        disabledValueofAllFocusButtonsAtIndexOnThisCard.push(buttonAtIndex.getAttribute('disabled'));
        if (disabledValueofAllFocusButtonsAtIndexOnThisCard.length >= numberOfFocusExerciseButtons) {
          containerForTheFocusExerciseButtons.setAttribute("disabled","false");
        }
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

    let nameOfTheAccessoryExercise = document.createElement('h5');
    nameOfTheAccessoryExercise.textContent = accessoryExercisesArray[i];
    containerForTheAccessoryExerciseButtons.appendChild(nameOfTheAccessoryExercise)

      // APPEND CHILD ON BUTTON ROW WITH COL AND BUTTON
    let acc_button_row = document.createElement('div');
    acc_button_row.classList.add('row','gx-5');
    acc_button_row.setAttribute("id", "accessoryGridBottom"); 
    // End Accessory 

  let numberOfAccessoryExerciseButtons = 3;

//   <div class="image" title="platemath">
//     <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"> 
// </div>

  for (let i = 0; i < numberOfAccessoryExerciseButtons; i++)
    {
      let hoverButton = document.createElement('div');
      hoverButton.setAttribute("class", "image")
      hoverButton.setAttribute("title", "platemath")

      // /*
console.log(Math.round(((oneRepMax[1].accessoryOneRepMax - 45) / 45) / 2))
      // */

      let buttonAtIndex = document.createElement('button');
      const disabledValueofAllAccessoryButtonsAtIndexOnThisCard = [];
      buttonAtIndex.setAttribute("name", "button" + i);
      buttonAtIndex.textContent = `Set ` + (i+1) + `: 5 reps at ${oneRepMax[1].accessoryOneRepMax} lbs`;
      buttonAtIndex.classList.add('btn','btn-primary','btn-sm','col-4');
      
      buttonAtIndex.addEventListener("click", function() {
        buttonAtIndex.setAttribute("disabled","true");
        console.log(containerForTheAccessoryExerciseButtons.getAttribute("disabled"));
        disabledValueofAllAccessoryButtonsAtIndexOnThisCard.push(buttonAtIndex.getAttribute('disabled'));
        console.log(disabledValueofAllAccessoryButtonsAtIndexOnThisCard)
        console.log(disabledValueofAllAccessoryButtonsAtIndexOnThisCard.length)
        if (disabledValueofAllAccessoryButtonsAtIndexOnThisCard.length >= numberOfAccessoryExerciseButtons) {
          containerForTheAccessoryExerciseButtons.setAttribute("disabled","true");
          console.log(containerForTheAccessoryExerciseButtons.getAttribute("disabled"));
        }
        }
      );    
      
      hoverButton.appendChild(buttonAtIndex);
      containerForTheAccessoryExerciseButtons.appendChild(hoverButton);
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
    
    let complete_row = document.createElement('div');
    complete_row.classList.add('row','justify-content-md-center');
    complete_row.setAttribute("id", "complete"); 
    
    let complete_col = document.createElement('div');
    complete_col.classList.add('col-70');
    
    let complete_button = document.createElement('button');
    complete_button.classList.add('btn','btn-primary','btn-lg');
    complete_button.textContent = "Complete";
    
    outerContainer.appendChild(cardio_form)
    cardio_form.appendChild(cardio_col);
    cardio_col.appendChild(cardio_row);
    cardio_row.appendChild(cardio_label);
    cardio_row.appendChild(cardio_button);
    
    outerContainer.appendChild(complete_row);
    complete_row.appendChild(complete_col);
    complete_col.appendChild(complete_button);
};
};

function init() {
  setValues();
  cardColumnCreator(); 
  setGreeting();
};

init();
