import FilterBar from './FilterBar'
import FoodWrapper from './FoodWrapper'
import { useState } from "react";
import '../../../styles/pages/clickandcollect/menusection.scss'
function MenuSection() {
    const [clickedCat, setCat] = useState('Entrées');
    return (
        <div className='menu-section'>
            <h2>Menu</h2>
            <FilterBar clickedCat={clickedCat} setCat={setCat} />
            <FoodWrapper clickedCat={clickedCat} setCat={setCat} />
        </div>
    )
}

export default MenuSection