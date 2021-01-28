import {makeAutoObservable} from "mobx";

class Messages{
    constructor() {
        makeAutoObservable(this)
    }

    messages = []

    getMessages(){
        return this.messages
    }

    addMessage(message) {
        this.messages.push(message)
    }

}

export default new Messages()