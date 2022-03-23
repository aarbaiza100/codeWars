// create a function which answers the question:
// " Are you playing banjo?"
//if your name starts with "R" or lower case "r"
// you are playing the banjo 

//The function takes a name as its only argument
//Returns one of the following strings 
// name + " plays banjo"

// name = " does not play banjo"


  function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === 'r') {
      return name + ' plays banjo';
    } else {
      return name + ' does not play banjo';
    }
  }
