import React from "react"

const Input = React.forwardRef((props,ref)=>(
        <>
            <label>{props.label}</label>
            <input
                ref={ref}
                onChange={props.onChange}
                onBlur={props.onBlur}
                type={props.type}
                max={props.max}
                min={props.min}
                value={props.value}
            />
        </>
))
Input.displayName = "Input"

export default Input