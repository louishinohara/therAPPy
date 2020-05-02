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

    //        constructor() {
    //         super()
    //         this.state = {
    //             wholeData: []
    //         }
    //     }

    //     toggle = (data) => {
    //         var a = [1,2,3]
    //         console.log(data)
    //     };
    // render() {

    //     const db = firebase.firestore();
    //     var UID = firebase.auth().currentUser.uid;
        
    //     db.collection('surveyData').where("userID", "==", UID ).get()
    //     .then(snapshot => {
    //     snapshot.forEach(doc => {
    //         // console.log(wholeData)
    //         var data = doc.data()
    //         wholeData.push(data)
    //         // console.log(wholeData)
            
    //         // console.log(data.academicAvg)
            
    //     });

    //     })
    //     .catch(error => {
    //     console.log('Error!', error);
    //     })
        
    //     var data = [3, 1, 4, 9, 1, 1];
    //     console.log('wholeData')
    //     return (
            
    //         <View style={{ height: 200, padding: 20 }}>

    //         <Button title="Select Month" onPress={this.toggle(wholeData)} />
          
    //         </View>

    //     );