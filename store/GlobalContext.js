import React from "react"

const GlobalContext = React.createContext(
    {
        cart:[],
        foods:[],
        showModal:()=>{},
        dismisModal:()=>{},
        addToCart:(value)=>{},
    }
);

export default GlobalContext