import firebase from 'firebase/app'
import 'firebase/firestore'
import { useState } from 'react'
import { useUser } from '../../firebase/useUser'

const ReadToCloudFirestore = () => {
    const { user } = useUser()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [userID, setUserID] = useState('')

    const readData = () => {
        try {
            firebase
                .firestore()
                .collection('nextCollection')
                .doc(user.id)
                .onSnapshot(function (doc) {
                    console.log(doc.data())
                    setName(doc.data().string_data)
                    setEmail(doc.data().array_data[0])
                    setUserID(doc.data().number_data)
                    {{
                        <p>Test</p>}
                    }
                })
            
        } catch (error) {
            console.error(error)
            alert(error)
        }
    }
    
    return (
        <>
        <button onClick={readData}>Read Data From Cloud Firestore</button>
        <div className="data_read">
            <p>{name}</p>
            <p>{email}</p>
            <p>{userID}</p>
        </div>
        </>
    )
}

export default ReadToCloudFirestore