//set up socket
//import io from 'socket.io-client';

let socket ;
socket= io('http://localhost:3000');
//join game
$(document).ready(function(){
  $('#join_gamecode').on('input', function() {
    var text1 = $('#join_gamecode').val();
    if (text1 != '') {
      $('#join_game').prop('disabled', false);
      $('#join_game').addClass("transition ease-in-out delay-100 bg-green-700 hover:-translate-y-1 hover:bg-green-600 hover:scale-110");
    } else {
      $('#join_game').prop('disabled', true);
      $('#join_game').removeClass("transition ease-in-out delay-100 bg-green-700 hover:-translate-y-1 hover:bg-green-600 hover:scale-110");
    }
  });
});

//game creation
$(document).ready(function(){
  $('#gamecode, #gamecode_opponent').on('input', function() {
    var text1 = $('#gamecode').val();
    var text2 = $('#gamecode_opponent').val();
    socket.emit('gamecode', text1);
    socket.emit('gamecode_opponent',text2);
    if (text1 != '' && text2 != '') {
      $('#create_session').prop('disabled', false);
      $('#create_session').addClass("transition ease-in-out delay-100 bg-green-700 hover:-translate-y-1 hover:bg-green-600 hover:scale-110");
    } else {
      $('#create_session').prop('disabled', true);
      $('#create_session').removeClass("transition ease-in-out delay-100 bg-green-700 hover:-translate-y-1 hover:bg-green-600 hover:scale-110");
    }
  });
});

//character selection
$(document).ready(function(){
  $('#character').on('input', function() {
    var text1 = $('#character').val();
    if (text1 != '') {
      $('#create_character').prop('disabled', false);
      $('#create_character').addClass("transition ease-in-out delay-100 bg-green-700 hover:-translate-y-1 hover:bg-green-600 hover:scale-110");
    } else {
      $('#create_character').prop('disabled', true);
      $('#create_character').removeClass("transition ease-in-out delay-100 bg-green-700 hover:-translate-y-1 hover:bg-green-600 hover:scale-110");
    }
  });
});
