import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import WriteToCloudFirestore from '../components/cloud_Firestore/Write'
import ReadToCloudFirestore from '../components/cloud_Firestore/Read'
import  { useUser }  from '../firebase/useUser'
import Counter from '../components/realtimeDatabase/Counter'
import UploadFile from '../components/storage/UploadFile'
import Link from 'next/link'


export default function Home() {
  const {user, logout} = useUser()

  if(user) {
    return (
      <div className={styles.container}>

        <div className={styles.custom}>
          <div className={styles.main_profile}>
            { user.profilePic ? <image src={user.profilePic} height={50} width={50}></image> : <img className={styles.profilePic}  src="https://firebasestorage.googleapis.com/v0/b/nextjs-firebase-adazolhub.appspot.com/o/user_uploads%2Fvale-2.jpg?alt=media&token=605ec1cd-0483-4f00-bc97-91b5eeb7be5a"></img>}


          </div>
         
          <Counter id={user.id} />
          <WriteToCloudFirestore/>
          <ReadToCloudFirestore/>
              <UploadFile/>
          <button onClick={() => logout()}>Logout</button>
        </div>
      </div>
    )
  }
  else return (
    <div className={styles.container }>
      <Head>
        <title>Adazolhub | Firebase Aunthetication</title>
        <meta name="description" content="Login Authentication with firebase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1 className={styles.title}>Welcome to</h1>
        <h1 className={styles.title}>
          <Link href="/auth">
          Next JS - Firebase!
          </Link>
        </h1>

        <div className={styles.grid}>
          <Link  href="/auth">
              <h2 className={styles.card}>LOGIN</h2>
          </Link>
        </div>
      </main>

    </div>
  )
}
