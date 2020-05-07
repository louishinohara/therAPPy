//Written by Ajay Vejendla
//Debugged and edited by Ajay 

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require('firebase/app');

import {Alert,Button} from 'react-native';

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

        //Eject from expo before enabling

        //firebase.firestore().enablePersistence();
        
    }

    //Login with credentials email and password
    login(email, password) {

        return this.auth.signInWithEmailAndPassword(email, password);

    }


    //Create account with credentials email and password
    createAccount(email, password) {

        return this.auth.createUserWithEmailAndPassword(email,password);

    }

    getUser(){

        return this.auth.currentUser.uid;
    }

    //Search for documents from userID
    //Promise resolving to array of documents matching query
    async queryDataUserOnlyLimit(collection,x){
        //Array containing documents that match query
        var documents = [];
    
    
        //Declare reference object that points to collection 
        var docRef = this.database.collection(collection);
    
        //Return references to all documents that have a matching userID
        var query = docRef.where("userID", "==", this.auth.currentUser.uid);
        try{
        var querySnapshot = await query.orderBy('dateAndTimeReceived','desc').limit(30).get();
    
        querySnapshot.forEach(function (doc) {
            documents.push(doc.data());
        }
        
        );
        
        //return documents
        return documents;
        }

        catch(error){
            var errorCode = error.code;
            var errorMessage = error.message;

            Alert.alert(error.message);

            console.log(error.message);
        }
        
    }
    
    //Search for documents from userID
    //Promise resolving to array of documents matching query
    async queryDataUserOnly(collection,userID){
        //Array containing documents that match query
        var documents = [];
    
    
        //Declare reference object that points to collection 
        var docRef = this.database.collection(collection);
    
        //Return references to all documents that have a matching userID
        var query = docRef.where("userID", "==", userID);
        try{
        var querySnapshot = await query.get();
    
        querySnapshot.forEach(function (doc) {
            documents.push(doc.data());
        }
        
        );
        
        //return documents
        return documents;
        }

        catch(error){
            var errorCode = error.code;
            var errorMessage = error.message;

            Alert.alert(error.message);
        }
        
    }

    //Return most recently submitted caps survey submitted by the currently authenticated user.
    async querySurvey(){
        //Array containing documents that match query
        
        var documents = [];
        var userID = this.auth.currentUser.uid;
    
    
        //Declare reference object that points to collection 
        var docRef = this.database.collection('surveyData');
    
        //Return references to most recent caps survey entry
        var query = docRef.where("userID", "==", userID);
    
        try {
        var querySnapshot = await query.orderBy('dateAndTimeReceived','desc').limit(1).get();
        
        querySnapshot.forEach(function (doc) {
            documents.push(doc.data());
        }
        
        );
       
        //return documents
        return documents;
        }

        catch(error){
            var errorCode = error.code;
            var errorMessage = error.message;

            Alert.alert(error.message);
        }
        
    }
    
    //Search range date1 < timeAndDateReceived < date2
    //Promise, resolves to array of documents matching query
    async queryDataDate(collection,userID,date1,date2){
        //Array containing documents that match query
        var documents = [];
    
    
        //Declare reference object that points to collection 
        var docRef = this.database.collection(collection);
    
        //Return references to all documents that have a matching userID
        var query = docRef.where("userID", "==", userID).where("dateAndTimeReceived" , ">=", date1).where("dateAndTimeReceived" , "<", date2);
    
        //Retrieve the actual documents
        try{
        var querySnapshot = await query.get();
        querySnapshot.forEach(function (doc) {
            documents.push(doc.data());
        }
        
        );
        
        //return documents 
        return documents;
        }

        catch(error){
            var errorCode = error.code;
            var errorMessage = error.message;

            Alert.alert(error.message);
        }
        
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
    //Unused method that generates a date with the time set to a milisecond before midnight
    generateDateEnd(year,month,day){
        var endDate = new Date();
        endDate.setHours(23,59,59,9999);
        endDate.setFullYear(year,month,day);
    
        return firebase.firestore.Timestamp.fromDate(endDate);
    }

    getUserData(collection,userID,date){


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
         data.userID = this.auth.currentUser.uid;
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

    getEmail(){
        return this.auth.currentUser.email;
    }


}

global.firebase= new globalFirebase();
