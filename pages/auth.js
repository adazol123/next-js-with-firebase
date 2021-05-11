import Head from 'next/head'
import  FirebaseAuth  from '../components/auth/FIrebaseAuth'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Auth = () => {
    return (

        <div className={styles.container}>
             <Head>
                <title>Adazolhub | Login Panel</title>
                <meta name="description" content="Login Authentication with firebase" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <FirebaseAuth/>
            <Link href="/" className={styles.button}>
                <p className={styles.button}><a >Go Home</a></p>
            </Link>
        </div>
    )
}

export default Auth