import styles from './modal.module.css'
import Card from '../UI/card'
import Button from '../UI/button'
import { useContext } from 'react'
import GlobalContext from '../../store/GlobalContext'
import ModalItem from './modalItem'
const Modal =()=>{
    let total=0
    const ctx = useContext(GlobalContext)
    ctx.cart.forEach(element => total +=element.amount*element.price)
    return(
        <div className={styles.backdrop}>
            <Card className={`${styles['modal-container']}`}>
                <div className={`${styles['modal-header']}`}>
                    <p>Cart</p>
                    <Button onClick={ctx.dismisModal} type="button" value="x"/>
                </div>
                <div className={`${styles['modal-content']}`}>
                    {ctx.cart.length > 0 ? ctx.cart.map(cart => 
                       <ModalItem
                            key={cart.id}
                            foodName={cart.name}
                            foodPrice={cart.price}
                            foodAmount={cart.amount}
                       />
                    ):null}
                </div>
                <div className={`${styles['modal-footer']}`}>
                    <Button type="button" value="Buy"/>
                    <Button type="button" value="Cancel"/>
                    <div className={styles.right}>
                        Total:{' '}${total}
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Modal