import styles from './modal.module.css'
import Card from '../UI/card'
import Button from '../UI/button'

const Modal =(props)=>{
    const dismisModalHander=()=>{
        props.onDismisModal(false)
    }

    const total = 100
    return(
        <div className={styles.backdrop}>
            <Card className={`${styles['modal-container']}`}>
                <div className={`${styles['modal-header']}`}>
                    <p>Cart</p>
                    <Button onClick={dismisModalHander} type="button" value="x"/>
                </div>
                <div className={`${styles['modal-content']}`}>
                    <div className={`${styles['modal-item']}`}>
                        <div>
                            <div>awd</div>
                            <div>awdad</div>
                        </div>
                        <div className={styles.right}>
                            <Button type="button" value="-"/>
                            <Button type="button" value="+"/>
                        </div>
                    </div>
                    <hr/>
                    <div className={`${styles['modal-item']}`}>
                        <div>
                            <div>awd</div>
                            <div>awdad</div>
                        </div>
                        <div className={styles.right}>
                            <Button type="button" value="-"/>
                            <Button type="button" value="+"/>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div className={`${styles['modal-footer']}`}>
                    <Button type="button" value="Buy"/>
                    <Button type="button" value="Cancel"/>
                    <div className={styles.right}>
                        Total:{total}
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Modal