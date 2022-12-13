import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/database'
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBc09F0oBCCIR0JGVzc8cNZhEyHBTxp3qE",
  authDomain: "project-d70a0.firebaseapp.com",
  projectId: "project-d70a0",
  storageBucket: "project-d70a0.appspot.com",
  messagingSenderId: "328237060071",
  appId: "1:328237060071:web:2d94188a13d0991c44b742",
  measurementId: "G-DVQRQ4GP2J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db