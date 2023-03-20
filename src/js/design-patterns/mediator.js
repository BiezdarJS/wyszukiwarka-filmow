// poszczególne komponenty nie rozmawiają ze sobą nawzajem, tylko wszyskie rozmawiają z jednym kontrolerem który wykonuje zaawansowaną logikę

var Participant = function (name) {
  this.name = name;
  this.chatroom = null;
}

Participant.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function (message, from) {
    console.log(from.name + " to " + this.name + ": " + message);
  }
};

var Chatroom = function () {
  var participants = {};

  return {
    register: function (participant) {
      participants[participant.name] = participant;
      participant.chatroom = this;
    },

    send: function (message, from, to) {
      if (to) {
        // single message
        to.receive(message, from);
      } else {
        // broadcast message
        for (key in participants) {
          if (participants[key] !== from) {
            participants[key].receive(message, from);
          }
        }
      }
    }
  }
};

var chatroom = new Chatroom();

var beau = new Participant("Beau");
var quincy = new Participant("Quincy");

chatroom.register(beau);
chatroom.register(quincy);

quincy.send('Siemka wszystkim!');