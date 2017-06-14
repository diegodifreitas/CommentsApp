import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCsfcITNVrmCqsW15gJXY77lhDl3R3zxMw",
    authDomain: "commentsreactjs.firebaseapp.com",
    databaseURL: "https://commentsreactjs.firebaseio.com",
    projectId: "commentsreactjs",
    storageBucket: "commentsreactjs.appspot.com",
    messagingSenderId: "191181826444"
})

var db = database(app)
var base = Rebase.createClass(db)

export default base