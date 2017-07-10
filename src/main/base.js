import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCsfcITNVrmCqsW15gJXY77lhDl3R3zxMw",
    authDomain: "commentsreactjs.firebaseapp.com",
    databaseURL: "https://commentsreactjs.firebaseio.com",
    projectId: "commentsreactjs",
    storageBucket: "commentsreactjs.appspot.com",
    messagingSenderId: "191181826444"
})
const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
  'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base