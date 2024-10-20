
import fs from "fs/promises";
import path from "path";
import Emmiter from "events";

const Event = new Emmiter();

// je cree class Chat
class Chat {
    #users = [];
    constructor() {
        Event.on("userJoined", (username) => {
            console.log(`${username} joined the chat`);
        })
        Event.on("userLeft", (username) => {
            console.log(`${username} left the chat`);
        })
        Event.on("messageSent", (username, message) => {
            console.log(`${username} ${message}`);
        })
    }

    addUsers(username) {
        this.#users.push(username);
        Event.emit("userJoined", username);
    }
    removeUser(username) {
        this.#users = this.#users.filter((user) => user !== username);
        Event.emit("userLeft", username);
    }
    sendMessage(username, message) {
        Event.emit("messageSent", username, message);
    }
    showUsers() {
        console.log(`Current users:` + this.#users);
    }
 }


const chat = new Chat();
chat.addUsers("Alice");
chat.addUsers("Bob");
chat.sendMessage("Alice", "Hello, everyone!");
chat.showUsers();
chat.removeUser("Bob");
chat.showUsers();
