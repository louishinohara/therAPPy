//Written by Ajay Vejendla

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require('firebase/app');

// Add the Firebase products that you want to use
require('firebase/auth');
require('firebase/firestore');

var firebaseConfig = {
    apiKey: 'AIzaSyA5WEhLmHT7WDWo1paGkX7f8o_e1gsIr30',
    authDomain: 'software-engineering-9af8c.firebaseapp.com',
    databaseURL: 'https://software-engineering-9af8c.firebaseio.com',
    projectId: 'software-engineering-9af8c',
    storageBucket: 'software-engineering-9af8c.appspot.com',
    messagingSenderId: '549204690488',
    appId: '1:549204690488:web:6f5af93518accaa16208cd',
    measurementId: 'G-447368E30T',
};
// Initialize Firebase as global object
//TODO move away from global delcarations and figure out how to imlement using context providers
//global.firebase = firebase.initializeApp(firebaseConfig);

class globalFirebase {
    constructor() {
        this.firebaseServer = firebase.initializeApp(firebaseConfig);
        this.database = firebase.firestore();
        this.auth = firebase.auth();
    }

    login(email, password) {

        return this.auth.signInWithEmailAndPassword(email, password);

    }

    createAccount(email, password) {

        return this.auth.createUserWithEmailAndPassword(email,password);

    }

    getUserData(collection,userID){
        documents = [];

        docRef = this.database.collection(collection);
        query = docRef.where("userID", "==", userID);
        query.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                documents.push(doc.data());
                console.log(doc.id, " => ", doc.data());
            });
        })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
        
        return documents();


    }

    getUserData(collection,userID,date){





    }

    


    //Submit data object to /collection/x/ where x is a randomly generated string
    //Automatically timestamped
    //Automatically tagged with UID
    submitData(collection,data){
         data.dateAndTimeReceived = firebase.firestore.Timestamp.now();
         //data.userID = this.auth.currentUser.uid;
         this.database.collection(collection).doc().set(data);
        
    }

    //Not timestamped data submission to be used to upload backups
    submitDataDoc(collection,data,doc){
        this.database.collection(collection).doc(doc).set(data);
    }

    passwordReset(email){
        return this.auth.sendPasswordResetEmail(email);
    }

    signOut(){
        this.auth.signOut();
    }


}

global.firebase= new globalFirebase();
