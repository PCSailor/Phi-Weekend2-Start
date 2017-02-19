console.log('Make sure youre on http://localhost:5000/' );
var phirephitersArray;
var peopleIndex = 0;
$(document).ready(function(){
  console.log('jQuery ready');

  $.ajax({ // function of jQuery that gets data from server
    url: '/data',
    method: 'GET',
    success: function(data){
      // console.log('returned data from server: ', data); // NOTE: Main source showing all data
      phirephitersArray = data.phirephiters; // NOTE: no var=global
      // displayAllData(); // NOTE: Calls function displayData
      displayDataAtIndex();
  } // NOTE: FOR: success: function(data){
  }); // NOTE: FOR: $.ajax({

}); // NOTE: FOR: $(document).ready(function(){

// NOTE: Option 01: Complete array remains in RAM & is called to DOM one object at a time.
  function displayDataAtIndex (){
    appendDOM(phirephitersArray[peopleIndex]);
    // console.log(phirephitersArray); // NOTE: all objects
    // console.log(phirephitersArray[13]); // NOTE: one object
  }  // NOTE: FOR: function displayData (){

  // NOTE: Option 02:  Complete array kept on DOM & cycled through
  // function displayAllData (){
  //     // console.log(phirephitersArray); // NOTE: all objects
  //     // console.log(phirephitersArray[13]); // NOTE: one object
  //     // $('#divBottom').children().last().append('<li>' + phirephitersArray[10] + '</li>');
  //     for (var i = 0; i < phirephitersArray.length; i++) {
  //       appendDOM(phirephitersArray[i]);
  //     }  // NOTE: FOR: for (var i = 0; i < phirephitersArray.length; i++) {
  // }  // NOTE: FOR: function displayData (){

  function appendDOM(ulPeople) {  // NOTE: Function appending to DOM from AJAX
    $('#divMain').append('<ul class="ulPeople"></ul>');
    var $addDivMain = $('#divMain').children().last();
    // var $addDivBottom = $('#divBottom').children().last();
    $addDivMain.append('<li>' + ulPeople.name + '</li>');
    $addDivMain.append('<li>' + ulPeople.git_username + '</li>');
    $addDivMain.append('<li>' + ulPeople.shoutout + '</li>');
    //   $('#fwdButton').on('click', function() {
    // }) // NOTE: FOR: $('#fwdButton').on('click', function() {
    for (var i = 0; i < phirephitersArray.length; i++) {
      $('#mainImg').replaceWith().phirephitersArray[i]
    } // NOTE: FOR for loop
    // console.log($addDivMain); // Returning successfully
    // $addDivBottom.append('<li>' + phirephitersArray[3] + '</li>'); DELETE? // NOTE: This runs through for Loop
  } // NOTE: FOR: function appendDOM(ulPeople) {
