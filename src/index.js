import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');


// Initialize Firebase with Firebase configuration
firebase.initializeApp({
    apiKey: "AIzaSyCcGQl07r2IH7-IC-Y1E__kM4jotH1t7R4",
    authDomain: "evernote-clone-97d68.firebaseapp.com",
    databaseURL: "https://evernote-clone-97d68.firebaseio.com",
    projectId: "evernote-clone-97d68",
    storageBucket: "evernote-clone-97d68.appspot.com",
    messagingSenderId: "546405590200",
    appId: "1:546405590200:web:a1459d9996f1641e"
});

ReactDOM.render(<App />, document.getElementById('evernote container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
