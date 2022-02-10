import styles from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar =()=>{
    return(
        <>
            <div className={styles.navbar}>
                <div className={styles['nav-title']}>MyFood App</div>
                <div className={styles.nav}>
                    <div className={styles['nav-item']}>
                    <FontAwesomeIcon icon={['fas', 'cart-shopping']} />{' '}
                        <span>0</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar