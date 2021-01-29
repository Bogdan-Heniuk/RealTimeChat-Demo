import firebase from "firebase";

export const firebaseConfig = {
    databaseURL : 'https://chat-e1d30-default-rtdb.europe-west1.firebasedatabase.app',
    apiKey: "AIzaSyBzugpE4jD6GKke5E1DbJa_7Ige0dnxico",
    authDomain: "chat-e1d30.firebaseapp.com",
    projectId: "chat-e1d30",
    storageBucket: "chat-e1d30.appspot.com",
    messagingSenderId: "1048710430565",
    appId: "1:1048710430565:web:84b7570ba31fabf1a1eb8c"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export const auth = firebase.auth()
export default firebase
