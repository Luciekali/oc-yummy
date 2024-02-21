
function FoodCard({ name, shortDescription, price, id, description, catId }, index) {
    return (
        <ul key={id}>
            <li key={name}>{name}</li>
            {shortDescription ? <li key={description}> {shortDescription} </li> : <li>{description}</li>}
            <li>{price}</li>

            <button>+</button>
        </ul>
    )
}

export default FoodCard