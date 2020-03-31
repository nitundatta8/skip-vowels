$(document).ready(function(){
  $("#showPazzel").click(function(event){
    var sentence = "Show  me  the  pazzel"
    var vowels = ['a','e','i','o','u'];
    console.log(showPazzel(sentence,vowels));
    $("#pazzel").text(showPazzel(sentence,vowels));
    $("#result").click(function(){
      $("#output").text(sentence);
    });
    event.preventDefault();
  });
});

// -->S,h,o,w, ,m,e, ,t,h,e, ,p,a,z,z,e,l
function showPazzel(sentence,vowels){
  var newSentence = sentence.split('');
   for (var i = 0; i < newSentence.length; i++) {  // loop through string
    for (var j = 0; j < vowels.length; j++) {   // loop through vowels
      if (newSentence[i] === vowels[j]) {   // letter is a vowel
          newSentence[i] = "_ " ;
        } 
    }  
  }  
  return newSentence.join("");
}