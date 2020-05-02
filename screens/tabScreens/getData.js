// import firebase from 'react-native-firebase';

export async function getData(onSurveyDataReceived){
    var surveyData = null
    var UID = firebase.auth().currentUser.uid;
    var snapshot = await firebase.firestore().collection("surveyData").where("userID", "==", UID).get()

    snapshot.forEach((doc) => {
        var data = doc.get("users")
        surveyData = data
        // surveyData.push(data);
    }); 

    // console.log(surveyData)
    onSurveyDataReceived(surveyData)

}

