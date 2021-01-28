import {makeAutoObservable} from "mobx";

class Messages{
    constructor() {
        makeAutoObservable(this)
    }

    messages = []

    addMessage(message) {
        this.messages.push(message)
    }

}