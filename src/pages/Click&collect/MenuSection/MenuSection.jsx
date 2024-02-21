import FilterBar from './FilterBar'
import FoodWrapper from './FoodWrapper'
import { useState } from "react";

function MenuSection() {
    const [clickedCat, setCat] = useState('starter');
    return (
        <div>
            <FilterBar clickedCat={clickedCat} setCat={setCat} />
            <FoodWrapper clickedCat={clickedCat} setCat={setCat} />
        </div>
    )
}

export default MenuSection