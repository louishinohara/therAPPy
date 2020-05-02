// import firebase from 'react-native-firebase';

// export async function getData(onSurveyDataReceived){
//     var surveyData = null
//     var wholeData = []
//     var UID = firebase.auth().currentUser.uid;
//     var snapshot = await firebase.firestore().collection("surveyData").where("userID", "==", UID).get()
    
//     snapshot.forEach((doc) => {
//         var data = doc.get("users")
//         surveyData = data
//         // surveyData.push(data);
//     }); 

//     // console.log(surveyData)
//     onSurveyDataReceived(surveyData)

// }






// app.get('/data', (req, res)=>{
//     const db = fire.firestore();
//     var wholeData = []
//     db.collection('ninjas').orderBy('name', 'asc').get()
//     .then(snapshot => {
//       snapshot.forEach(doc => {
//         // console.log(doc.id, '=>', doc.data());
//         // console.log(doc.data().name + doc.data().age);
//         // console.log(doc.data());
//         wholeData.push(doc.data())
//       });
//       console.log(wholeData)
//       res.send(wholeData)
//     })
//     .catch(error => {
//       console.log('Error!', error);
//     })
// })