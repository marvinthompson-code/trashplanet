import React from "react"
import Clothing from "./Clothing"
import ProductList
 from "../ProductsList/ProductsList"

const ShopPage = ({products}) => {

    return (
        <>
        <Clothing />
        <ProductList products={products} />
        </>
    )
}

export default ShopPage