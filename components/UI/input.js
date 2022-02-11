const Input =(props)=>{
    return(
        <>
            <label>{props.label}</label>
            <input
                onChange={props.onChange}
                onBlur={props.onBlur}
                type={props.type}
                max={props.max}
                min={props.min}
            />
        </>
    )
}

export default Input