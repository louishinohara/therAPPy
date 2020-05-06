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

    //Login with credentials email and password
    login(email, password) {

        return this.auth.signInWithEmailAndPassword(email, password);

    }


    //Create account with credentials email and password
    createAccount(email, password) {

        return this.auth.createUserWithEmailAndPassword(email,password);

    }

    //Search for documents from userID
    //Promise resolving to array of documents matching query
    async queryDataUserOnly(collection,userID){
        //Array containing documents that match query
        documents = [];
    
    
        //Declare reference object that points to collection 
        docRef = this.database.collection(collection);
    
        //Return references to all documents that have a matching userID
        query = docRef.where("userID", "==", userID);
    
        querySnapshot = await query.get();
    
        querySnapshot.forEach(function (doc) {
            documents.push(doc.data());
        }
        
        );
        
        //return documents
        return documents;
        
    }
    
    //Search range date1 < timeAndDateReceived < date2
    //Promise, resolves to array of documents matching query
    async queryDataDate(collection,userID,date1,date2){
        //Array containing documents that match query
        documents = [];
    
    
        //Declare reference object that points to collection 
        docRef = this.database.collection(collection);
    
        //Return references to all documents that have a matching userID
        query = docRef.where("userID", "==", userID).where("dateAndTimeReceived" , ">=", date1).where("dateAndTimeReceived" , "<", date2);
    
        //Retrieve the actual documents
        querySnapshot = await query.get();
        querySnapshot.forEach(function (doc) {
            documents.push(doc.data());
        }
        
        );
        
        //return documents 
        return documents;
        
    }
    
    //Generate dates to use with date sorted queries
    //Year, month, day should be set according to JavaScript Date standards
    generateDate(year,month,day){
        var startDate = new Date();
        startDate.setHours(0,0,0,0);
        startDate.setFullYear(year,month,day);
    
        return firebase.firestore.Timestamp.fromDate(startDate);
    }
    
    //Generate an ending date for date queries
    //Year, month, day should be set according to JavaScript Date standards
    //Unused method that generates the second before midnight
    //Fixed by adjusting query operators
    generateDateEnd(year,month,day){
        var endDate = new Date();
        endDate.setHours(23,59,59,9999);
        endDate.setFullYear(year,month,day);
    
        return firebase.firestore.Timestamp.fromDate(endDate);
    }

    //Use to convert timestamp back to date
    timestampToDate(tstamp){

        return firebase.firestore.Timestamp.toDate(tstamp);

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

    //Send a password reset link to email
    passwordReset(email){
        return this.auth.sendPasswordResetEmail(email);
    }


    //Log out current user
    signOut(){
        this.auth.signOut();
    }


}

global.firebase= new globalFirebase();
