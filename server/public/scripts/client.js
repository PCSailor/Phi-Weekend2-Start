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
    // console.log(phirephitersArray); // NOTE: all objects
    // console.log(phirephitersArray[13]); // NOTE: one object
  appendDOM(phirephitersArray[peopleIndex]);
}  // NOTE: FOR: function displayData (){

//   $('#fwdButton').on('click', function() {
// }) // NOTE: FOR: $('#fwdButton').on('click', function() {

// click the next button
// move to the next array index
// call the function

// NOTE: Option 02:  Complete array kept on DOM & cycled through
// function displayAllData (){
//     // console.log(phirephitersArray); // NOTE: all objects
//     // console.log(phirephitersArray[13]); // NOTE: one object
//     // $('#divBottom').children().last().append('<li>' + phirephitersArray[10] + '</li>');
//     for (var i = 0; i < phirephitersArray.length; i++) {
//       appendDOM(phirephitersArray[i]);
//     }  // NOTE: FOR: for (var i = 0; i < phirephitersArray.length; i++) {
// }  // NOTE: FOR: function displayData (){


function appendDOM(ulPeople) { // anyFunctionName
    $('#divMain').append('<ul class="ulPeople"></ul>');
    var $addDivMain = $('#divMain').children().last();
    var $addDivBottom = $('#divBottom').children().last();
    $addDivMain.append('<li>' + ulPeople.name + '</li>');
    $addDivMain.append('<li>' + ulPeople.git_username + '</li>');
    $addDivMain.append('<li>' + ulPeople.shoutout + '</li>');
    // console.log($addDivMain); // Returning successfully
    // $addDivBottom.append('<li>' + phirephitersArray[3] + '</li>'); DELETE? // NOTE: This runs through for Loop
} // NOTE: FOR: function appendDOM(ulPeople) {
