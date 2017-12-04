$(document).ready(function() {
  $("form#groceryListForm").submit(function(event) {
    event.preventDefault();
    var inputs = ["item1", "item2", "item3", "item4"];
    var sortArray = [];
    debugger;

    inputs.forEach(function(input) {
      var userInput = $("#"+input).val();
      var userInputUPPERCASE = userInput.toUpperCase();
      sortArray.push(userInputUPPERCASE);
    });//End inputs function.
    sortArray.sort();

  }); //End form submit function.

});
