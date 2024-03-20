import { useState } from "react"

function QuantityController ( { cart, setCart, name, price } ) {
const [quantityDisplay, setQuantityDisplay] = useState(0)

    function addToCart (name, price) {
        const currentFoodSaved = cart.find((food) => food.name === name)
        if (currentFoodSaved) {
            const cartFilteredCurrentFood = cart.filter (
                (food) => food.name !== name
            )
            setCart([
                ...cartFilteredCurrentFood,
                {name, price, quantity: currentFoodSaved.quantity +1, subtotal: currentFoodSaved.subtotal +price}
            ])
            setQuantityDisplay(quantityDisplay+1)
        } else {
            setCart ([...cart, {name, price, quantity: 1, subtotal: price}])
            setQuantityDisplay(+1)
        }
    }

    function removeToCart (name, price) {
        const currentFoodSaved = cart.find((food) => food.name === name)
        if (currentFoodSaved) {
            const cartFilteredCurrentFood = cart.filter (
                (food) => food.name !== name
            )
            setCart([
                ...cartFilteredCurrentFood,
                {name, price, quantity: currentFoodSaved.quantity -1, subtotal: currentFoodSaved.subtotal - price}
            ])
            setQuantityDisplay(quantityDisplay-1)
        } if (currentFoodSaved.quantity === 1) {
            const cartFilteredCurrentFood = cart.filter (
                (food) => food.name !== name
            )
            setCart ([...cartFilteredCurrentFood])
        }
    }

    return ( 
      quantityDisplay < 1 ?
        <div className="food-btns">
            <button className="add-food-btn" onClick={() => addToCart (name, price)} >+</button> 
            <p className="hidden"> 0</p>
            <button className="subtract-food-btn hidden" onClick={() => removeToCart (name, price)} > - </button>
        </div> 

            :
        
        <div className="food-btns">
            <button className="add-food-btn" onClick={() => addToCart (name, price)} >+</button> 
            {quantityDisplay}
            <button className="subtract-food-btn" onClick={() => removeToCart (name, price)} > - </button>
        </div>  
    )
}

export default QuantityController