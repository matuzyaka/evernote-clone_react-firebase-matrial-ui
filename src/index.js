import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcGQl07r2IH7-IC-Y1E__kM4jotH1t7R4",
    authDomain: "evernote-clone-97d68.firebaseapp.com",
    databaseURL: "https://evernote-clone-97d68.firebaseio.com",
    projectId: "evernote-clone-97d68",
    storageBucket: "evernote-clone-97d68.appspot.com",
    messagingSenderId: "546405590200",
    appId: "1:546405590200:web:a1459d9996f1641e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
