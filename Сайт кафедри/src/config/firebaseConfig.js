import firebase from 'firebase'


const config = {
    apiKey: 'AIzaSyCHA1G3CTTYxabNJwRt7kSqNB-Cj0RUnPA',
    authDomain: 'mychat-kursova.firebaseapp.com',
    databaseURL: 'https://mychat-kursova.firebaseio.com',
    projectId: 'mychat-kursova',
    storageBucket: 'mychat-kursova.appspot.com',
    messagingSenderId: '1037098247961',
    appId: '1:1037098247961:web:e685248c9191525ef08788'
}
firebase.initializeApp(config)

export const firebaseObj = firebase
