import FoodCard from "./FoodCard"
function QuantityController ( {quantity, setQuantity} ) {
     
    
    return ( 
      quantity <= 0 ?
        <div className="food-btns">
            <button className="add-food-btn" onClick={() => setQuantity(quantity + 1)}>+</button> 
        </div> 

            :
        
        <div className="food-btns">
            <button className="add-food-btn" onClick={() => setQuantity(quantity + 1)}>+</button> 
            <div>{quantity}</div>
            <button className="subtract-food-btn" onClick={() => setQuantity(quantity - 1)} > - </button>
        </div>  
    )
}

export default QuantityController