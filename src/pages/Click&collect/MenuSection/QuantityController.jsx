
function QuantityController ( { cart, setCart, name, price } ) {
    
    function handleCartChange (name, price) {
        const currentFoodSaved = cart.find((food) => food.name === name)
        if (currentFoodSaved) {
            const cartFilteredCurrentFood = cart.filter (
                (food) => food.name !== name
            )
            setCart([
                ...cartFilteredCurrentFood,
                {name, price, quantity: currentFoodSaved.quantity +1, subtotal: currentFoodSaved.subtotal +price}
            ])
        } else {
            setCart ([...cart, {name, price, quantity: 1, subtotal: price}])
        }
    }

    return ( 
      cart.length <= 0 ?
        <div className="food-btns">
            <button className="add-food-btn" onClick={() => handleCartChange (name, price)}>+</button> 
        </div> 

            :
        
        <div className="food-btns">
            <button className="add-food-btn" onClick={() => handleCartChange (name, price)}>+</button> 
                
            <button className="subtract-food-btn" onClick={() => handleCartChange (name, price)} > - </button>
        </div>  
    )
}

export default QuantityController