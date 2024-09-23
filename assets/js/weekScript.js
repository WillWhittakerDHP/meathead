let userName = "";
let muscleGroup = "";
let focusExercise = "";
let accessoryExercisesArray = [];
let splitDesign =[
  {timerLengthPerDay: ""},
  {splitDaysTotal: ""},
  {setsPerDay: ""},
  {repAdvice: ""}
];
  let percentagesForWeightAdvice = [.75, .80, .85, .90, .95];
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
  
  let stopTimer = false;
  let continueTimer = false;
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
      
      let labelForCardAtIndex = document.createElement('div');
      labelForCardAtIndex.classList.add('row'); 
      
      let cardAtIndex = document.createElement('div');
      cardAtIndex.classList.add('col-4'); 
      cardAtIndex.setAttribute("id", "vertRightBorder");
      
      let dayNameForCardAtIndex = document.createElement('h4');
      dayNameForCardAtIndex.textContent = "Day " + (i+1);
      
      cardAtIndex.appendChild(dayNameForCardAtIndex);
      labelForCardAtIndex.appendChild(cardAtIndex);
      outerContainer.appendChild(labelForCardAtIndex);
      
      
      let timerSubSectionInsideLabel = document.createElement('div');
      timerSubSectionInsideLabel.classList.add('col'); 
      timerSubSectionInsideLabel.setAttribute("id", "vertLeftBorder");
      
      let timerRowOrienter = document.createElement('div');
      timerRowOrienter.classList.add('row'); 
      
      let timerColumnOrienter = document.createElement('div');
      timerColumnOrienter.classList.add('col'); 
      
      let timerLabel = document.createElement('h4');
      timerLabel.textContent = "Timer:";
      
      let timerActualContainer = document.createElement('div');
      timerActualContainer.classList.add('col');
      
      let timer = document.createElement('h4');
      timer.textContent = secondsLeft;
      
      const runTimer = function () {
        const secondsPerSet = splitDesign[0].timerLengthPerDay;        
        let timerInterval = setInterval(function () {
          secondsLeft--;        
          timer.textContent = secondsLeft;
          if (secondsLeft === -1 || stopTimer) {
            clearInterval(timerInterval);
            secondsLeft = secondsPerSet;
            timer.textContent = secondsLeft;
            setInterval(secondsPerSet);
            stopTimer = false;
          }
        }, 
        1000);
      };
      
      labelForCardAtIndex.appendChild(timerSubSectionInsideLabel);
      timerSubSectionInsideLabel.appendChild(timerRowOrienter);
      timerRowOrienter.appendChild(timerColumnOrienter);
      timerColumnOrienter.appendChild(timerLabel);
      timerRowOrienter.appendChild(timerActualContainer);
      timerActualContainer.appendChild(timer);


      let containerForTheFocusExerciseButtons = document.createElement('div');
      containerForTheFocusExerciseButtons.classList.add('container','text-center');
      containerForTheFocusExerciseButtons.setAttribute("id", "cardContent");
      containerForTheFocusExerciseButtons.setAttribute("id", "buttonGrid");
      
      let nameOfTheFocusExercise = document.createElement('h5');
      nameOfTheFocusExercise.textContent = focusExercise;
      containerForTheFocusExerciseButtons.appendChild(nameOfTheFocusExercise);
      
      let numberOfFocusExerciseButtons = splitDesign[2].setsPerDay;
      
      let focusButtonAtIndexMaker = function() { 
        let clickNumber = [];
        for (let p=0; p < numberOfFocusExerciseButtons; p++){
          let containerDisabler = function() {
            containerForTheAccessoryExerciseButtons.setAttribute("disabled", "true");
          };
          let buttonClick = function() {   
            if(secondsLeft === splitDesign[0].timerLengthPerDay){
              clickNumber.push("click");
              // secondsLeft--;
              buttonAtIndex.setAttribute("disabled","true");
              runTimer();
              if (clickNumber.length >= numberOfFocusExerciseButtons) {
                containerDisabler();
              };     
            }else{
              alertTimer();
            };
          };
          let buttonAtIndex = document.createElement('button');
          buttonAtIndex.setAttribute("name", "button" + p);
          buttonAtIndex.textContent = `Set ` + (p+1) + `: ${splitDesign[3].repAdvice} reps at ${parseFloat(oneRepMax[0].focusOneRepMax * percentagesForWeightAdvice[i]).toFixed(0)} lbs`;
          buttonAtIndex.setAttribute("class", "setButton");
          buttonAtIndex.classList.add('btn','btn-sm','col-4');
          buttonAtIndex.classList.add("position-relative");
          buttonAtIndex.addEventListener("click", buttonClick);
          // hoverButtonMaker();        
          containerForTheFocusExerciseButtons.appendChild(buttonAtIndex);
          outerContainer.appendChild(containerForTheFocusExerciseButtons);

          let plateCounter =[];
          let plateOrder = [45, 25, 10, 5, 2.5];
          let remainingWeight = [oneRepMax[0].focusOneRepMax - 45];
          let plateDenomination = [];
          let platesNeeded = [];
          let plateCalculator = function() {
            for (let j = 0; j < plateOrder.length; j++) {
              let nearestPlatesWithoutGoingOver = remainingWeight[j] / plateOrder[j];
              if (Math.floor(nearestPlatesWithoutGoingOver) % 2 === 0) {
                nearestPlatesRoundedDown = parseInt(Math.floor(nearestPlatesWithoutGoingOver));
              } else {
                nearestPlatesRoundedDown = parseInt((Math.floor(nearestPlatesWithoutGoingOver) - 1));
              };
              let newRemainingWeight = remainingWeight[j] - (nearestPlatesRoundedDown * plateOrder[j]);
              newRemainingWeight = remainingWeight[j] - (nearestPlatesRoundedDown * plateOrder[j]);
              remainingWeight.push(newRemainingWeight);
              plateCounter.push(nearestPlatesRoundedDown);
              if (nearestPlatesRoundedDown > 0) {                
                plateDenomination.push(plateOrder[j]);
                platesNeeded.push(parseInt(nearestPlatesRoundedDown));
              } else if (nearestPlatesRoundedDown = 0) {                
                newRemainingWeight = remainingWeight[j];
                remainingWeight.push(0);
                plateCounter.push(0);
              } else {                
              };              
            };
          };
          plateCalculator();
          let hoverButtonAdvice = (`For this weight you need to add: ${platesNeeded[0]} ${plateDenomination[0]}s ${platesNeeded[1]} ${plateDenomination[1]}s ${platesNeeded[2]} ${plateDenomination[2]}s ${platesNeeded[3]} ${plateDenomination[3]}s ${platesNeeded[4]} ${plateDenomination[4]}s`);
          let hoverButton = document.createElement('span');
          hoverButton.classList.add("tooltiptext");            
          const re = /( ?undefineds? ?)+/i;
          const regn = /\n+/i;
          hoverButtonAdvice = hoverButtonAdvice.replace(regn , '')
          hoverButtonAdvice = hoverButtonAdvice.trim();            
          hoverButtonAdvice = hoverButtonAdvice.replace(re, '')
          hoverButton.textContent = hoverButtonAdvice;
          buttonAtIndex.appendChild(hoverButton);
          };

        
      };
        focusButtonAtIndexMaker();
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
      let containerForTheAccessoryExerciseButtons = document.createElement('div');
      containerForTheAccessoryExerciseButtons.classList.add('container','text-center');
      containerForTheAccessoryExerciseButtons.setAttribute("id", "cardContent");
      containerForTheAccessoryExerciseButtons.setAttribute("id", "buttonGrid");
      // containerForTheAccessoryExerciseButtons.setAttribute("disabled","true");
      
      let nameOfTheAccessoryExercise = document.createElement('h5');
      nameOfTheAccessoryExercise.textContent = accessoryExercisesArray[i];
      containerForTheAccessoryExerciseButtons.appendChild(nameOfTheAccessoryExercise)
      
      // APPEND CHILD ON BUTTON ROW WITH COL AND BUTTON
      // let acc_button_row = document.createElement('div');
      // acc_button_row.classList.add('row','gx-5');
      // acc_button_row.setAttribute("id", "accessoryGridBottom"); 
      // End Accessory 
      
      let numberOfAccessoryExerciseButtons = 3;
      
      let accessoryButtonAtIndexMaker = function() {
        let buttonClick = function() {
          buttonAtIndex.setAttribute("disabled","true");
        };
        
        
        for (let m=0; m < numberOfAccessoryExerciseButtons; m++)
          {
          let buttonAtIndex = document.createElement('button');
          buttonAtIndex.setAttribute("name", "button" + m);
          buttonAtIndex.textContent = `Set ` + (m+1) + `: 5 reps at ${oneRepMax[1].accessoryOneRepMax} lbs`;
          buttonAtIndex.setAttribute("class", "setButton")
          buttonAtIndex.classList.add('btn','btn-sm','col-4');
          buttonAtIndex.addEventListener("click", buttonClick);
          containerForTheAccessoryExerciseButtons.appendChild(buttonAtIndex);
          outerContainer.appendChild(containerForTheAccessoryExerciseButtons);
          };
        };
        accessoryButtonAtIndexMaker();

        // outerContainer.appendChild(containerForTheAccessoryExerciseButtons)
        
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
        cardio_button.setAttribute("id", "cardioInput"); 
        cardio_form.setAttribute("id", "cardioForm"); 
        
        let complete_row = document.createElement('div');
        complete_row.classList.add('row','justify-content-md-center');
        complete_row.setAttribute("id", "complete"); 
        
        let complete_col = document.createElement('div');
        complete_col.classList.add('col-70');
        
        let complete_button = document.createElement('button');
        complete_button.setAttribute("class", "setButton");
        complete_button.classList.add('btn','btn-lg');
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
    
    
    function alertTimer(){
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
      modalTitle.textContent = "Timer is Running.";
      
      let X = document.createElement('button');
      X.classList.add('btn-close');
      X.setAttribute("type", "button");
      X.setAttribute("data-bs-dismiss", "modal");
      X.setAttribute("aria-label", "Close"); 
      
      let modalBody = document.createElement('div');
      modalBody.classList.add('modal-body');
      
      let modalTextContent = document.createElement('p');
      modalTextContent.style.fontSize = "15px"
      modalTextContent.textContent = "Are you sure you want to move on to the next exercise?";
      
      let modalFooter = document.createElement('div');
      modalFooter.classList.add('modal-footer');
      
      let modalNo = document.createElement('button');
      modalNo.classList.add('btn');
      modalNo.setAttribute("class", "setButton")
      modalNo.setAttribute("data-bs-dismiss", "modal");
      modalNo.textContent = "Close";
      
      let modalMoveOn = document.createElement('button');
      modalMoveOn.classList.add('btn','btn-danger');
      modalMoveOn.setAttribute("data-bs-dismiss", "modal");
      modalMoveOn.textContent = "Move On";
      
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
      
      modalContent.appendChild(modalFooter);
      modalFooter.appendChild(modalNo);
      modalFooter.appendChild(modalMoveOn);
      
      modalMoveOn.addEventListener("click", function (e){
        stopTimer = true;
      });
      
      var myModal = new bootstrap.Modal(modal, {
        keyboard: false
      })
      myModal.show()
      
      
    }
    
    function init() {
      setValues();
      cardColumnCreator(); 
      setGreeting();
    };
    
    init();