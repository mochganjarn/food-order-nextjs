import React from "react"

const GlobalContext = React.createContext(
    {
        cart:[],
        foods:[],
        showModal:()=>{},
        dismisModal:()=>{},
        addToCart:(value)=>{},
        decreaseAmount:(value)=>{},
    }
);

export default GlobalContext