import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAyLKhu0cfHW5KZcbX7rk6fzWUP7d28L0M",
  authDomain: "catch-of-the-day-aandreatos.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-aandreatos.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// this is a name export
export { firebaseApp };

//this is a defalt export
export default base;
