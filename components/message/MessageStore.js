const MessageModel = require(`./MessageModel`);

function addMessage(message) {
    const myMessage = new MessageModel(message);
    myMessage.save();
}

function getMessages() {
    return list;
}

module.exports = {
    addMessage,
    getMessages
}