import styles from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar =(props)=>{

    const cartClickHandler =()=>{
        props.onCartClick(true)
    }

    return(
        <>
            <div className={styles.navbar}>
                <div className={styles['nav-title']}>GN-Food App</div>
                <div className={styles.nav}>
                    <div className={styles['nav-item']}>
                    <FontAwesomeIcon onClick={cartClickHandler} icon={['fas', 'cart-shopping']} />{' '}
                        <span>0</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar