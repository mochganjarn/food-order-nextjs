
import styles from './modalItem.module.css'
import Button from '../UI/button'
import { useContext } from 'react'
import GlobalContext from '../../store/GlobalContext'

const ModalItem =(props)=>{
    const ctx = useContext(GlobalContext)
    
    const decreaseCartAmountHandler=()=>{
        ctx.decreaseAmount(props.id)
    }

    const increaseCartAmountHandler=()=>{
        let food = {
            id:props.id,
            name:props.name,
            amount:1,
            price:props.price
        }
        ctx.addToCart(food)
    }
    return(
        <>
            <div className={`${styles['modal-item']}`}>
                            <div>
                                <div>{props.foodName}</div>
                                <div>${props.foodPrice}</div>
                                <div>x{props.foodAmount}</div>
                            </div>
                            <div className={styles.right}>
                                <Button onClick={decreaseCartAmountHandler} type="button" value="-"/>
                                <Button onClick={increaseCartAmountHandler} type="button" value="+"/>
                            </div>
            </div>
            <hr/>
        </>
    )
}

export default ModalItem