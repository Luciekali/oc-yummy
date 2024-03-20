import FoodList from './FoodList'
import FoodCart from './FoodCart'
import { useState } from "react"

function FoodWrapper({ clickedCat }) {
    const [ cart, setCart ] = useState([])
    return (
        <div className='menu'> 
    <FoodList clickedCat={clickedCat} cart={cart} setCart={setCart}/>
    <FoodCart cart={cart} setCart={setCart} />
    </div>
       )
}



export default FoodWrapper 