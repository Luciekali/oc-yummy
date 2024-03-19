import FoodCard from './FoodCard'
import { menu } from '../../../datas/menu'

function FoodList ({ clickedCat, cart, setCart}) {
    const categories = menu.reduce(
        (acc, menu) =>
            acc.includes(menu.category) ? acc : acc.concat(menu.category), [])

    const foodBycategorie = menu.filter((food) => food.category === clickedCat)
    return (
        categories.map((cat) =>
            (cat === clickedCat) ?
                <ul key={cat} className="food-container">
                    <h3>{cat}</h3>
                    {foodBycategorie.map(({ name, shortDescription, price, id, category, description, }) => (
                        <FoodCard key={id} id={id} name={name} shortDescription={shortDescription} price={price} category={category} description={description} clickedCat={clickedCat} cart={cart} setCart={setCart}/>
                    ))}
                </ul>
                : (null)
        )
     
       )
}



export default FoodList