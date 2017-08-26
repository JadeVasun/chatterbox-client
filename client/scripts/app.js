// YOUR CODE HERE:
$(document).ready(function() {
  app.init();
});
var app = {
  Server: "http://parse.la.hackreactor.com/chatterbox/classes/messages",
  init: function () {
  app.fetch();
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
      url: "http://parse.la.hackreactor.com/chatterbox/classes/messages",
      type: 'GET',
      data: 'order=-createdAt',
      contentType: 'application/json',
      success: function (data) {
        console.log(data);
        for (var results in data) {
          messages = data[results];
          messages.forEach(function(element) {
            if (element.text !== undefined){
            app.renderMessage(element);
            }
          });
        }
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
  renderMessage: function (messages) {
    messages.roomName = _.escape(messages.roomname);
    messages.username = _.escape(messages.username);
    messages.text= _.escape(messages.text);
    $('#chats').append(`<div class='message'>
    <div class='username'><a class=" '+messages.username+' ">${"Username: " + messages.username}</div>
    <div class='text'>${"Message: " + messages.text}</div>
    <div class='roomname'>${"Roomname: " + messages.roomname}</div>
</div>`);
  },
  renderRoom: function (value) {
    $('#roomSelect').append('<div> ' + value + '</div>');
  },
  handleUsernameClick: function (data) {
    
  },
  handleSubmit: function () {

  }
}


