
(function (window) {

var names = ["Akshat", "Tanmay", "Sid", "John", "Jerry", "Zoro", "Yogesh", "Jain", "Vaibhav", "Jake"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})(window);
