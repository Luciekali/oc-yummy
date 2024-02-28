import FoodList from './FoodList'
import FoodCart from './FoodCart'

function FoodWrapper({ clickedCat }) {
    return (
        <div className='menu'> 
    <FoodList clickedCat={clickedCat}/>
    <FoodCart/>
    </div>
       )
}



export default FoodWrapper 