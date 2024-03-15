import QuantityController from "./QuantityController"

function FoodCard({ name, shortDescription, price, id, description, quantity, setQuantity}) {
 
    return (
        <ul key={id} className="food-card">
            <div className="food-card-content">
                <li className="food-name" key={name}>{name}</li>
                {shortDescription ? <li className="food-description" key={description}> {shortDescription} </li> : <li className="food-description">{description}</li>}
                <li className="food-price">{price} €</li>
            </div>
            <QuantityController quantity={quantity} setQuantity={setQuantity} />
        </ul>
    )
}

export default FoodCard