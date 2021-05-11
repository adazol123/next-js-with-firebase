
import firebase from 'firebase/app'
import 'firebase/storage'
import { useRef, useState } from 'react'
import styles from '../../styles/Home.module.css'

const UploadFile = () => {
    const inputEl = useRef(null)
    const [value, setValue] = useState(0);

    function uploadFile() {
        var file = inputEl.current.files[0]
        var storageRef = firebase.storage().ref('user_uploads/' + file.name)
        var task = storageRef.put(file)

        task.on('state_change', 
            function progress(snapshot) {
                setValue((snapshot.bytesTransferred/snapshot.totalBytes)*100)
            },
            function error(error) {
                alert(error)
            },
            function complete() {
                alert('Uploaded to firebase storage bucket successfully!')
            }
        )
    }

    return (
        <div className={styles.file_upload}>
            <input 
            
                id="upload-photo"
                type="file"
                name="file"
                onChange={uploadFile}    
                ref={inputEl}
            />
            <label htmlFor="upload-photo">Upload a File</label>
            <progress value={value} max="100"></progress>
        </div>
    )
}

export default UploadFile