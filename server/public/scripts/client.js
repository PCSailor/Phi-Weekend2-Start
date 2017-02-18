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
              
        function appendDOM(divPeople) { // anyFunctionName
          $('#divMain').append('<div class="divPeople"></div>');
          var $addKeys = $('#divMain').children().last();
          $addKeys.append('<li>' + divPeople.name + '</li>');
          $addKeys.append('<li>' + divPeople.git_username + '</li>')
        }
        // NOTE: Adding a single picture
        // $('<img src=" '+ imgPath + '">').load(function(){
        // $('<img src="'+ $HOME/Desktop/Fox Picture 003.jpg + '">').load(function(){
        //   $(this).width('300px').height('300px').append('#divMain');
        // });






      }); // NOTE: FOR: $(document).ready(function(){

































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
        //   var $addKeys = $('#divMain').children().last();
        // //   $addKeys.append('<li class="name">' + divPeople.name + '</li>');
        // //   $addKeys.append('<li class="gitUser">' + divPeople.git_username + '</li>')
        // // }
        // // NOTE: Copied working 3 lines above
        // $addKeys.append('<li>' + divPeople.name + '</li>');
        // $addKeys.append('<li>' + divPeople.git_username + '</li>')
        // }// NOTE: FOR: function appendDOM(divPeople) {
        //
        //
        //
        //
        // }); // NOTE: FOR: $(document).ready(function(){
