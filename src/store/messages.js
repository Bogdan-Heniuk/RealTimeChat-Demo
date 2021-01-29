import {makeAutoObservable} from "mobx";
import firebase from "../components/config";

class Messages {
    constructor() {
        makeAutoObservable(this)
    }

    messages = []

    onMessage = (snapshot) => {
        this.messages = Object.values(snapshot.val())

    }

    async subscribeToMessages() {
        await firebase.database().ref('messages').on('value', this.onMessage)

    }

    async addMessage(message) {
        await firebase.database().ref('messages').push({
            id: message.id,
            user_id: message.user_id,
            title: message.title
        })
    }

}

export default new Messages()