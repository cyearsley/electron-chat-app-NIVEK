$('#home').on('click', function () {
    app.emit('view-selected', 'home');
    $('#settings').css('color', 'white');
    $('#chat').css('color', 'white');
    $('#home').css('color', '#6062b2');
});
$('#chat').on('click', function () {
    app.emit('view-selected', 'chat');
    $('#settings').css('color', 'white');
    $('#home').css('color', 'white');
    $('#chat').css('color', '#6062b2');
});
$('#settings').on('click', function () {
    app.emit('view-selected', 'settings');
    $('#home').css('color', 'white');
    $('#chat').css('color', 'white');
    $('#settings').css('color', '#6062b2');
});

var app = require('./../lib/app');
app.on('rendered', function (html) {
    $('#main-container').html(html);
});
$(function () {
    app.emit('view-selected', 'home');
    $('#home').css('color', '#6062b2');
    socket.emit('join room', {roomName: 'lobby'});

    socket.on('receive my room', function (msg) {
        $('#current-room').html('Current Room: "<b>' + msg.room + '</b>"');
    });
});

// joinChatOnClick = function () {
//     socket.emit('join room', {roomName: $('#room-input').val()});
//     $('#room-input').val('');
// }
