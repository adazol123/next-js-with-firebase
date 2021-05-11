import  FirebaseAuth  from '../components/auth/FIrebaseAuth'
import styles from '../styles/Home.module.css'

const Auth = () => {
    return (
        <div className={styles.custom}>
            <FirebaseAuth/>
            <p><a href="/">Go Home</a></p>
        </div>
    )
}

export default Auth