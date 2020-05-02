


// grabUserData = async (userId) => {
//     var db = firebase.firestore();
//     var userId = firebase.auth().currentUser.uid;
//     var docRef = db.collection("Users").doc(userId);
//     return docRef.get().then(function(doc) {
//       if (doc.exists) {
//           console.log(doc.data()); //see below for doc object
//           return doc.data();
//       } else {
//           console.log("No such document!");
//       }
//     }).catch(function(error) {
//         console.log("Error getting document:", error);
//     });
                    <BarChart
                    style={{ flex: 1 }}
                    data={data}
                    gridMin={0}
                    svg={{ fill: 'rgb(134, 65, 244)' }}
                />
                <XAxis
                    style={{ marginTop: 10 }}
                    data={ data }
                    scale={scale.scaleBand}
                    formatLabel={ (value, index) => index }
                    labelStyle={ { color: 'black' } }
                />




// var depression = 0
        // var generalAnxiety = null
        // var substanceAbuse = null
        // var socialAnxiety = null
        // var academicDistress = null
        // var eatingConcerns = null
        // var familyDistress = null
        // var hostility = null

        const db = firebase.firestore();
        var UID = firebase.auth().currentUser.uid;
        var startDate = new Date();
        var year = 2020
        var month = 4
        var day = 30
        startDate.setHours(0,0,0,0);
        startDate.setFullYear(year,month,day);
        console.log(startDate)
        var bruh = null
        // var s = firebase.firestore.Timestamp.fromDate(new Date("December 10, 1815"))
        
        // Values to be used in the graph
        var query = db.collection("surveyData").where("userID", "==", UID ).get()
                .then(snapshot => {
                    if (snapshot.empty) {
                    console.log('No matching documents.');
                    return;
                    }  
            
                    snapshot.forEach(doc => {
                    var data = doc.data()
                    var users = doc.get("users")
                    // console.log(users)
                    bruh = users
                    



                    // depression = data.depAvg
                    // generalAnxiety = data.genAnxAvg
                    // substanceAbuse = data.substanceAvg
                    // socialAnxiety = data.socAnxAvg
                    // academicDistress = data.academicAvg
                    // eatingConcerns = data.eatingAvg
                    // familyDistress = data.familyAvg
                    // hostility = data.hositilityAvg
                    // console.log(data.depAvg)
                    });
                })
                .catch(err => {
                    console.log('Error getting documents', err);
                });


                {/* <BarChart
                    style={{ flex: 1 }}
                    data={data}
                    gridMin={0}
                    svg={{ fill: 'rgb(134, 65, 244)' }}
                />
                <XAxis
                    style={{ marginTop: 10 }}
                    data={ data }
                    scale={scale.scaleBand}
                    formatLabel={ (value, index) => index }
                    labelStyle={ { color: 'black' } }
                />
                            */}


        // onSurveyDataReceived = (surveyData) => {
        //     console.log(surveyData);
        //     this.setState(prevState => ({
        //         surveyData: surveyData
        //     }));
        // }
        // componentDidMount() {
        //     getData(this.onSurveyDataReceived)
        // }

        