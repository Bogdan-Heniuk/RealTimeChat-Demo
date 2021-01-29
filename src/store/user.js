import {makeAutoObservable} from "mobx";
import firebase from "../config";

class User {
    constructor() {
        makeAutoObservable(this)
    }

    user = null

    isInitialized = false

    subscribeToAuthStateChanged = () => {
        firebase.auth().onAuthStateChanged((user) => {
            this.user = user
            this.isInitialized = true
        });

    }
}

export const userStore = new User()