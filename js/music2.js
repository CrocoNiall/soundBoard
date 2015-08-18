
var minions = document.getElementsByClassName("minion");

//this was going to assign the event listeners, it works hoewever it addigns the same .mp3 file to each event listener. 

// var x = 1;
// var url;
// var i;
// makeMinions();
// function makeMinions(){

//   for (i = 0; i < 8; i++) {
//     url = 'sounds/minionSound' + i.toString() + '.mp3' ; 
//     minions[i].addEventListener("click", function(e) {
//       x++;
//       startSound(url , minions[i]);
      
//     });
//   }
// }

// adds event listeners for each item in array, pass the argument 'url' & audio id to the start sound function. 

minions[0].addEventListener("click", function(e) {startSound('sounds/minionSound1.mp3' , '001'); });
minions[1].addEventListener("click", function(e) {startSound('sounds/minionSound2.mp3' , '002'); });
minions[2].addEventListener("click", function(e) {startSound('sounds/minionSound3.mp3' , '003'); });
minions[3].addEventListener("click", function(e) {startSound('sounds/minionSound4.mp3' , '004'); });
minions[4].addEventListener("click", function(e) {startSound('sounds/minionSound5.mp3' , '005'); });
minions[5].addEventListener("click", function(e) {startSound('sounds/minionSound6.mp3' , '006'); });
minions[6].addEventListener("click", function(e) {startSound('sounds/minionSound7.mp3' , '007'); });
minions[7].addEventListener("click", function(e) {startSound('sounds/minionSound8.mp3' , '008'); });

//setup sound manager 

function startSound(url, ID){
soundManager.setup({
  url: '/swf/',
  onready: function() {

    var mySound = soundManager.createSound({
      id: ID,
      url: url 
    });
    mySound.play();
    console.log(ID);
  },
  ontimeout: function() {} });

}