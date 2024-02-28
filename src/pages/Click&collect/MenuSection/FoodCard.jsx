
function FoodCard({ name, shortDescription, price, id, description, catId }, index) {
    return (
        <ul key={id} className="food-card">
            <div className="food-card-content">
                <li className="food-name" key={name}>{name}</li>
                {shortDescription ? <li className="food-description" key={description}> {shortDescription} </li> : <li className="food-description">{description}</li>}
                <li className="food-price">{price} €</li>
            </div>
            <div className="food-btns">
                <button className="add-food-btn">+</button>
            </div>
        </ul>
    )
}

export default FoodCard