//creates a listener for when you press a key
window.onkeyup = keyup;

//creates a global Javascript variable
var inputTextValue;

function keyup(e) {
  //setting your input text to the global Javascript Variable for every key press
  inputTextValue = e.target.value;
  $('#searchValue').text("https://pagespeed.web.dev/report?url=" + inputTextValue);
  //listens for you to press the ENTER key, at which point your web address will change to the one you have input in the search box
  if (e.keyCode == 13) {
	  $("#submit").click();
    
  }
}

$("#submit").click(function() {
  window.location = "https://pagespeed.web.dev/report?url=" + inputTextValue;
});