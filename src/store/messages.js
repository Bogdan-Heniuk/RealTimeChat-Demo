import {makeAutoObservable} from "mobx";
import firebase from "../config";

class Messages {
    constructor() {
        makeAutoObservable(this)
    }

    messages = []

    onMessage = (snapshot) => {
        this.messages = Object.values(snapshot.val() || {})

    }

    async subscribeToMessages() {
        await firebase.database().ref('messages').on('value', this.onMessage)

    }

    async addMessage(message) {
        await firebase.database().ref('messages').push(message)
    }

}

export default new Messages()