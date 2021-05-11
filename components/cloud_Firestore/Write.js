import firebase from 'firebase/app'
import 'firebase/firestore'
import { useUser } from '../../firebase/useUser'

const WriteToCloudFirestore = () => {
    const { user } = useUser()
    const sendData = () => {
        try {
            firebase
                .firestore()
                .collection('nextCollection')
                .doc(user.id)
                .set({
                    string_data: user.name,
                    number_data: user.id,
                    boolean_data: true,
                    map_data: { stringInMap: 'Hi', numberInMap: 4},
                    array_data: [ user.email, 4],
                    null_data: null,
                    time_stamp: firebase.firestore.Timestamp.fromDate(new Date('December 12, 1994 03:24:00')),
                    geo_point: new firebase.firestore.GeoPoint(34.714322, -131.468435)
                })
                .then(alert('Data was successfully sent to cloud firestore!'))
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
    
    return (
        <>
            <button onClick={sendData}>Send Data to Cloud Firestore</button>
        </>
    )
}

export default WriteToCloudFirestore