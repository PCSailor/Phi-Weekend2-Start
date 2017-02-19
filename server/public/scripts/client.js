// get one pic on dom
// add next button
// add previous button
console.log('Make sure youre on http://localhost:5000/' );
var phirephitersArray;


$(document).ready(function(){
  console.log('jQuery is ready');
  // Upon page load, get the data from the server
  $.ajax({ // function of jQuery
    url: '/data',
    method: 'GET',
    success: function(data){
      console.log('returned data from server: ', data);
      phirephitersArray = data.phirephiters; // no var global

      displayData();



      // QUESTION: How do you get one piece of info off the server? i.e.:  Object=phirephiters Array[0] / Object  Name ??  // NOTE: $('.test').data.phirephiters.name;   // test();
      // } // NOTE: FOR: function test(){
    } // NOTE: FOR: success: function(data){
    }); // NOTE: FOR: $.ajax({

      function displayData (){
        // console.log(phirephitersArray); // NOTE: Working for all objects
        // console.log(phirephitersArray[13]); // NOTE: Working for individual object
        $('#divBottom').children().last().append('<li>' + phirephitersArray[10] + '</li>');

        // NOTE: Successful to the DOM with appendDOM(data.phirephiters[1]);
        for (var i = 0; i < phirephitersArray.length; i++) {
          appendDOM(phirephitersArray[i]);
        }  // NOTE: FOR: for (var i = 0; i < phirephitersArray.length; i++) {
        }  // NOTE: FOR: function displayData (){




            function appendDOM(ulPeople) { // anyFunctionName
              $('#divMain').append('<ul class="ulPeople"></ul>');
              var $addDivMain = $('#divMain').children().last();
              var $addDivBottom = $('#divBottom').children().last();
              $addDivMain.append('<li>' + ulPeople.name + '</li>');
              $addDivMain.append('<li>' + ulPeople.git_username + '</li>');
              // $addDivMain.append('<li>' + ulPeople.shoutout + '</li>');
              $addDivMain.append('<li>' + ulPeople.shoutout + '</li>');
              // console.log($addDivMain); // Returning successfully
              $addDivBottom.append('<li>' + phirephitersArray[0] + '</li>'); // NOTE: This runs through for Loop
            } // NOTE: FOR: function appendDOM(ulPeople) {



              // QUESTION: appendDOM is a function called for within the AJAX function.  function appendDOM is called for with ulPeople but within the AJAX function the appendDOM function is called for with the data.phirephiters[i] object-array.  How does the server data transfer to the function appendDOM(ulPeople)?

              // $('#divMain:eq()').hide(); // NOTE: Hides divMain data
              $('#divMain').hide(); // NOTE: Hides divMain data
              $('#divMain:eq()').show(); // NOTE: Shows divMain data
              $('li').eq(1).css('background-color', 'red');
              $('body').find('div').eq(0).css('background-color', 'blue');
              // $('#divBottom')  // data.phirephiters




              //TODO: $('.button').on('click', function(){
              // if (on click == #backButton) {
              //   navigate to previous image
              // } else {
              //   navigate to next image
              // }
              // });

              // NOTE: This is working and appending list to DOM
              // function appendDOM(divPeople) { // anyFunctionName
              //   $('#divMain').append('<div class="divPeople"></div>');
              //   var $addDivMain = $('#divMain').children().last();
              //   $addDivMain.append('<li>' + divPeople.name + '</li>');
              //   $addDivMain.append('<li>' + divPeople.git_username + '</li>')
              //   $addDivMain.append('<li>' + divPeople.shoutout + '</li>')
              // }
              // NOTE: Adding a single picture
              // $('<img src=" '+ imgPath + '">').load(function(){
              // $('<img src="'+ $HOME/Desktop/Fox Picture 003.jpg + '">').load(function(){
              //   $(this).width('300px').height('300px').append('#divMain');
              // });






            }); // NOTE: FOR: $(document).ready(function(){





























              // var test01 = function(){
              //   $('.listFoot').text('var test01 = function(){');} // Appends to DOM
              //   test01(); // NOTE: Calls appends to DOM function



              // // get one pic on dom
              // // add next button
              // // add previous button
              // console.log('Make sure youre on http://localhost:5000/' );
              //
              // $(document).ready(function(){
              // console.log('jQuery is ready');
              //     // Upon page load, get the data from the server
              //     $.ajax({
              //       url: '/data',
              //       method: 'GET',
              //       success: function(data){
              //         console.log('returned data from server: ', data);
              // // NOTE: Successful to the DOM with appendDOM(data.phirephiters[1]);
              // for (var i = 0; i < data.phirephiters.length; i++) {
              //   appendDOM(data.phirephiters[i]);
              // }
              // console.log(appendDOM(data.phirephiters[11]));
              //
              // // QUESTION: How do you get one piece of info off the server? i.e.:  Object=phirephiters Array[0] / Object  Name ??  // NOTE: $('.test').data.phirephiters.name;   // test();
              //     // } // NOTE: FOR: function test(){
              //       } // NOTE: FOR: success: function(data){
              //     }); // NOTE: FOR: $.ajax({
              //
              // // NOTE: Testing Area
              // // NOTE: Testing Area
              // // NOTE: Next: change text
              // var test01 = function(){
              //   // $('.test').first().text('testing');} // NOTE: succssfully appends to DOM
              //   $('.test').text('list-02');}
              // test01(); // NOTE: This line calls the append to DOM function
              // // NOTE: Next: Italics
              // // $('li.test').html(function() {
              // //   return '<em>' + $(this).text() + '</em>';
              // // }); // NOTE: succssfully appends italics to DOM
              // // // NOTE: Next:
              // // $('li.name').html(function() { // div#divPeople
              // //   return '<em>' + $(this).text() + '</em>';
              // }); // NOTE:
              //
              // // NOTE: Testing Area
              // // NOTE: Testing Area
              //
              // function appendDOM(divPeople) { // anyFunctionName
              //   $('#divMain').append('<div class="divPeople"></div>');
              //   var $addDivMain = $('#divMain').children().last();
              // //   $addDivMain.append('<li class="name">' + divPeople.name + '</li>');
              // //   $addDivMain.append('<li class="gitUser">' + divPeople.git_username + '</li>')
              // // }
              // // NOTE: Copied working 3 lines above
              // $addDivMain.append('<li>' + divPeople.name + '</li>');
              // $addDivMain.append('<li>' + divPeople.git_username + '</li>')
              // }// NOTE: FOR: function appendDOM(divPeople) {
              //
              //
              //
              //
              // }); // NOTE: FOR: $(document).ready(function(){
