import styles from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GlobalContext from '../../store/GlobalContext'
import { useContext } from 'react'

const Navbar =()=>{

    const ctx = useContext(GlobalContext)

    return(
        <>
            <div className={styles.navbar}>
                <div className={styles['nav-title']}>GN-Food App</div>
                <div className={styles.nav}>
                    <div className={styles['nav-item']}>
                    <FontAwesomeIcon onClick={ctx.showModal} icon={['fas', 'cart-shopping']} />{' '}
                        <span>{ctx.cart.length}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar