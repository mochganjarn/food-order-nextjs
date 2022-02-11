import styles from './food.module.css'
import Card from '../UI/card'
import Button from '../UI/button'
import Input from '../UI/input'

const Food =(props)=>{
    return(
        <Card className={styles.food}>
            {props.children}
            <div className={`${styles['food-name']}`}>Food Name</div>
            <div className={styles.price}>$5</div>
            <div className={`${styles['amount-control']}`}>
                <Input 
                    label="Amount" 
                    type="number"
                    min="1"
                />
            </div>
            <Button value="Add to Cart"/>
        </Card>
    )    
}

export default Food