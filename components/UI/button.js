import styles from './button.module.css'

const Button =(props)=>{
    return(
        <button
            className={`${styles.btn} ${props.className}`}
            onClick={props.onClick}
            type={props.type}
        >
            {props.value}
        </button>
    )
}

export default Button