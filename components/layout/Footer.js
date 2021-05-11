import styles from '../../styles/Home.module.css'
import Image from 'next/image'

const Footer = () => {
    return ( 
        <div className={styles.main }>

            <footer className={styles.footer}>
                <a
            href="https://adazolhub.online"
            target="_blank"
            rel="noopener noreferrer"
            >
            © 2021 AdazolHUB {' '}
            <span className={styles.logo}>
                <Image src="/logo512.png" alt="Vercel Logo" width={32} height={30} />
            </span>
            </a>
            </footer>
            </div>
     );
}
 
export default Footer;