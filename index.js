//function Monday() {
  //  console.log("Go for a five-mile run");
    //console.log("Pump iron");
//}

//function Tuesday() {
  //  console.log("Go for a five-mile run");
    //console.log("Swim 40 laps");
//}

//function Wednesday() {
  //  console.log("Go for a five-mile run");
    //console.log("Go for a five-mile run");
//}

//function Thursday() {
  //  console.log("Go for a five-mile run");
    //console.log("Pump iron");
//}

//function Friday() {
  //  console.log("Go for a five-mile run");
    //console.log("Swim 40 laps");
//}

//function runFiveMiles() {
    //console.log("Go for a five-mile run");
  //}
  
  //function liftWeights() {
    //console.log("Pump iron");
  //}
  
  //function swimFortyLaps() {
    //console.log("Swim 40 laps");
  //}
  
  //function exerciseRoutine(postRunActivity) {
    //runFiveMiles();
    //postRunActivity();
  //}
  
  //function morningRoutine(exercise) {
    //let breakfast;
  
    //if (exercise === liftWeights) {
      //breakfast = "protein bar";
    //} else if (exercise === swimFortyLaps) {
      //breakfast = "Kale smoothie";
    //} else {
      //breakfast = "granola";
    //}
  
    //exerciseRoutine(exercise);
  
    //return function () {
      //console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    //};
 // }
  
  //exerciseRoutine(liftWeights);   
  //const afterExercise = morningRoutine(liftWeights); 
  
  //afterExercise(); 
  
  function receivesAFunction(callback) {
    callback();
  }
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("This is a named function");
    }
    return namedFunction;
  }
  function returnsAnAnonymousFunction() {

    return function () {
      console.log("This is an anonymous function");
    };
  }
  
  

