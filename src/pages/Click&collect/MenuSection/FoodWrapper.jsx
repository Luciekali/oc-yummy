import FoodList from './FoodList'
import FoodCart from './FoodCart'

function FoodWrapper({ clickedCat }) {
    return (
        <div className='food-wrapper'> 
    <FoodList clickedCat={clickedCat}/>
    <FoodCart/>
    </div>
       )
}



export default FoodWrapper 