import FoodList from './FoodList'
import FoodCart from './FoodCart'


import { useState } from "react"



function FoodWrapper({ clickedCat }) {
    const [ quantity, setQuantity ] = useState(0)
    return (
        <div className='menu'> 
    <FoodList clickedCat={clickedCat} quantity={quantity} setQuantity={setQuantity}/>
    <FoodCart quantity={quantity} setQuantity={setQuantity}/>
    </div>
       )
}



export default FoodWrapper 