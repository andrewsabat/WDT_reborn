$(document).ready(function() {
  $('#additionButton').click(function() {
    var newForm = document.querySelector('form').cloneNode(true);
    document.querySelector('main').append(newForm);
  });

  $('#deleteButton').click(function() {
    var docForms = document.querySelectorAll('form');
    if (docForms.length > 1) {
      document.querySelector('main').removeChild(docForms[docForms.length-1]);
    }
  });

  $('#resetButton').click(function() {
    var allInputs = document.getElementsByTagName('input');
    var radioInputs = [];
    for (var i=0; i<allInputs.length; i++) {
      if (allInputs[i].type == "radio" && i % 3 == 2){
        allInputs[i].checked = true;
      }
      else if (allInputs[i].type == "checkbox" && allInputs[i].checked == true){
        allInputs[i].checked = false;
      }
      else {
        allInputs[i].value = "";
      }
    }
  });
});
