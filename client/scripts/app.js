// YOUR CODE HERE:
var app = {
  init: function () {

  },
  send: function (message) {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages',
      type: 'POST',
      data: message,
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },
  fetch: function () {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      //url: ,
      type: 'GET',
      //data: {},
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },
  clearMessages: function () {
    $('#chats').children().remove();
  },
  renderMessage: function (message) {
    $('#chats').append('<div> ' + message.text + ' </div>');
  },
  renderRoom: function (value) {
    $('#roomSelect').append('<div> ' + value + '</div>');
  },
  addFriend: function () {
    
  }

}

