const messageStore = require(`./MessageStore`);

function addMessage(user,message) {

    return new Promise((resolve,reject)=>{

        if (!user || !message ) {
            return reject(`Datos incorrectos`);
        }
        if (message.length < 1 || message.length > 255) {
            return reject(`Mensaje muy largo`);
        }

        const fullMessage = {
            id : 1,
            user : user,
            message : message,
            date : new Date()
        }

        messageStore.addMessage(fullMessage);
        return resolve("Mensaje Agregado!");
    })
    
}

function getMessage() {
    console.log(messageStore);
    return new Promise((resolve,reject)=>{
        resolve(messageStore.getMessages());
    })
}

module.exports = {
   add : addMessage,
   list :  getMessage
}