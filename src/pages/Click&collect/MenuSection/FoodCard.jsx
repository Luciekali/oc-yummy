
function FoodCard({ name, shortDescription, price, id, description, catId }, index) {
    return (
        <ul key={id} className="food-card">
            <div>
                <li key={name}>{name}</li>
                {shortDescription ? <li key={description}> {shortDescription} </li> : <li>{description}</li>}
                <li>{price}</li>
            </div>

            <button>+</button>
        </ul>
    )
}

export default FoodCard