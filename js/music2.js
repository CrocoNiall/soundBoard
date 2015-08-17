
var minionOne = document.getElementById("minion1");
minionOne.addEventListener('click', function() { 
  startSound('sounds/minionSound1.mp3', 'min1'  ); 
});

var minionTwo = document.getElementById("minion2");
minionTwo.addEventListener('click', function() { 
  startSound('sounds/minionSound2.mp3', 'min2'  ); 
});

var minionThree = document.getElementById("minion3");
minionThree.addEventListener('click', function() { 
  startSound('sounds/minionSound3.mp3', 'min3'  ); 
});

var minionOne = document.getElementById("minion1");
minionOne.addEventListener('click', function() { 
  startSound('sounds/minionSound1.mp3', 'min1'  ); 
});

function startSound(url, ID){
soundManager.setup({
  url: '/swf/',
  onready: function() {
    var mySound = soundManager.createSound({
      id: ID,
      url: url
    });
    mySound.play();
  },
  ontimeout: function() {
    // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
  }
});

}