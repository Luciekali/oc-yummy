import QuantityController from "./QuantityController"

function FoodCard({ name, shortDescription, price, id, description, cart, setCart}) {
 
    return (
        <ul key={id} className="food-card">
            <div className="food-card-content">
                <li className="food-name" key={name}>{name}</li>
                {shortDescription ? <li className="food-description" key={description}> {shortDescription} </li> : <li className="food-description">{description}</li>}
                <li className="food-price">{price} €</li>
            </div>
            <QuantityController cart={cart} setCart={setCart} name={name} price={price}/>
        </ul>
    )
}

export default FoodCard