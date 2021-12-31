import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { BsFillPhoneFill } from 'react-icons/bs';
import styles from '@/styles/Footer.module.scss';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <div className={styles.footer}>
                <div className={styles.top}>
                    <span>Repair </span>|<span>Relax </span>|<span>Rebalance </span>
                </div>
                <div className={styles.middle}>
                    <div className='book-btn-footer'>
                        <button><a href='#!'>Book Now</a></button>
                    </div>
                    <Link href='/'><a><Image className={styles.image} src='/imgs/ERLogo.png' width={182} height={100} alt='Equilibrium Remedial' /></a></Link>
                    <div className={styles.links}>
                        <Link href='https://www.truelocal.com.au' rel='noopener noreferrer' passHref><a>True Local</a></Link>
                        <Link href='https://www.google.com.au' passHref><a>Google Reviews</a></Link>
                        <div className={styles.links_icons}>
                            <Link href='#!'><a><FaTwitter /></a></Link>
                            <Link href='#!'><a><FaFacebookF /></a></Link>
                            <Link href='#!'><a><FaInstagram /></a></Link>
                            <Link href='#!'><a><FaYoutube /></a></Link>
                            <Link href='#!'><a><FaEnvelope /></a></Link>
                        </div>
                        <div>
                            <BsFillPhoneFill /> 9837498734
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <Link href='/privacy-policy' passHref><a>Privacy Policy</a></Link>
                    <p>Copyright {currentYear} &copy; Equilibrium Remedial</p>
                    <Link href='/privacy-policy' passHref><a>Terms &amp; Conditions</a></Link>
                </div>
            </div>
            <div className={styles.eglmedia}>
                <p>Designed and developed by <Link href='http://www.eglmedia.net' passHref ><a target='_blank' rel='noopener noreferrer'><Image className={styles.logo} src='/svg/EGLMediaWhite.svg' width={35} height={20} alt='EGLMedia'></Image></a></Link></p>
            </div>
        </div>
    )
}
