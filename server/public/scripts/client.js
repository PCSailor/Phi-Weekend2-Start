// get one pic on dom
// add next button
// add previous button
console.log('Make sure youre on http://localhost:5000/' );



$(document).ready(function(){
console.log('jQuery is ready');
    // Upon page load, get the data from the server
    $.ajax({
      url: '/data',
      method: 'GET',
      success: function(data){
        console.log('returned data from server: ', data);
// NOTE: Successful to the DOM with appendDOM(data.phirephiters[1]);
for (var i = 0; i < data.phirephiters.length; i++) {
  appendDOM(data.phirephiters[i]);
}
console.log(appendDOM(data.phirephiters[11]));

// QUESTION: How do you get one piece of info off the server? i.e.:  Object=phirephiters Array[0] / Object  Name ??  // NOTE: $('.test').data.phirephiters.name;   // test();
    // } // NOTE: FOR: function test(){
      } // NOTE: FOR: success: function(data){
    }); // NOTE: FOR: $.ajax({

var test01 = function(){
  $('.test').text('list-02');} // Appends to DOM
test01(); // NOTE: Calls appends to DOM function
ul01InBody


function appendDOM(divPeople) { // anyFunctionName
  $('#divMain').append('<div class="divPeople"></div>');
  var $addKeys = $('#divMain').children().last();
  $addKeys.append('<li>' + divPeople.name + '</li>');
  $addKeys.append('<li>' + divPeople.git_username + '</li>')
}





}); // NOTE: FOR: $(document).ready(function(){
