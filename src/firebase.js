import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC64EcUWqTzP3O394arzJfFuVVOhVsWAMI",
    authDomain: "discord-11.firebaseapp.com",
    databaseURL: "https://discord-11.firebaseio.com",
    projectId: "discord-11",
    storageBucket: "discord-11.appspot.com",
    messagingSenderId: "893606425249",
    appId: "1:893606425249:web:94f175360ff4d8954cf6e0",
    measurementId: "G-3LDFSFZT5X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db