// Written by Ushio Shinohara


import firebase from 'react-native-firebase';

    export async function getData(onSurveyDataReceived){
        var surveyData = null
        var wholeData = []
        var UID = firebase.auth().currentUser.uid;
        var snapshot = await firebase.firestore().collection("surveyData").where("userID", "==", UID).get()
        
        snapshot.forEach((doc) => {
            var data = doc.get("users")
            surveyData = data
        }); 
        onSurveyDataReceived(surveyData)

    }






        app.get('/data', (req, res)=>{
            const db = fire.firestore();
            var wholeData = []
            db.collection('ninjas').orderBy('name', 'asc').get()
            .then(snapshot => {
            snapshot.forEach(doc => {
                // console.log(doc.id, '=>', doc.data());
                // console.log(doc.data().name + doc.data().age);
                // console.log(doc.data());
                wholeData.push(doc.data())
            });
            console.log(wholeData)
            res.send(wholeData)
            })
            .catch(error => {
            console.log('Error!', error);
            })
        })

           constructor() {
            super()
            this.state = {
                wholeData: []
            }
        }

        toggle = (data) => {
            var a = [1,2,3]
            console.log(data)
        };
    render() {

        const db = firebase.firestore();
        var UID = firebase.auth().currentUser.uid;
        
        db.collection('surveyData').where("userID", "==", UID ).get()
        .then(snapshot => {
        snapshot.forEach(doc => {
            var data = doc.data()
            wholeData.push(data)

            
        });

        })
        .catch(error => {
        console.log('Error!', error);
        })
        
        var data = [3, 1, 4, 9, 1, 1];
        console.log('wholeData')
        return (
            
            <View style={{ height: 200, padding: 20 }}>

            <Button title="Select Month" onPress={this.toggle(wholeData)} />
          
            </View>

        );

        grabUserData = async (userId) => {
            var db = firebase.firestore();
            var userId = firebase.auth().currentUser.uid;
            var docRef = db.collection("Users").doc(userId);
            return docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log(doc.data()); //see below for doc object
                return doc.data();
            } else {
                console.log("No such document!");
            }
            }).catch(function(error) {

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