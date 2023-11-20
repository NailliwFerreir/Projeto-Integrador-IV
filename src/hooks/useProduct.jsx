import { createContext, useContext, useState } from "react";

const ProductContext=createContext({})
export const ProductProvider=({children})=>{
    const[products,setProducts]=useState([])
    return (
        <ProductContext.Provider value = {{products,setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}
export const useProduct=()=>{
    const context=useContext(ProductContext)
    return context
}

