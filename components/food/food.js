import styles from './food.module.css'
import Card from '../UI/card'
import Button from '../UI/button'
import Input from '../UI/input'
import { useContext, useState } from 'react'
import GlobalContext from '../../store/GlobalContext'

const Food =(props)=>{
    const [amount, setAmount] = useState(0)
    const ctx = useContext(GlobalContext)

    const amountChangeHandler = (event)=>{
        setAmount(parseInt(event.target.value))
    }

    const addToCartHandler=()=>{
        let food = {
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        }
        ctx.addToCart(food)
    }
    return(
        <Card className={styles.food}>
            {props.children}
            <div className={`${styles['food-name']}`}>{props.name}</div>
            <div className={styles.price}>${props.price}</div>
            <div className={`${styles['amount-control']}`}>
                <Input
                    onChange={amountChangeHandler} 
                    label="Amount" 
                    type="number"
                    min="1"
                />
            </div>
            <Button onClick={addToCartHandler} value="Add to Cart"/>
        </Card>
    )    
}

export default Food