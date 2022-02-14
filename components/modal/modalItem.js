
import styles from './modalItem.module.css'
import Button from '../UI/button'
const ModalItem =(props)=>{
    return(
        <>
            <div className={`${styles['modal-item']}`}>
                            <div>
                                <div>{props.foodName}</div>
                                <div>${props.foodPrice}</div>
                                <div>x{props.foodAmount}</div>
                            </div>
                            <div className={styles.right}>
                                <Button type="button" value="-"/>
                                <Button type="button" value="+"/>
                            </div>
            </div>
            <hr/>
        </>
    )
}

export default ModalItem