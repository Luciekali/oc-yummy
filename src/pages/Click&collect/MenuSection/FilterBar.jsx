import { menu } from '../../../datas/menu'

const categories = menu.reduce(
    (acc, menu) =>
        acc.includes(menu.category) ? acc : acc.concat(menu.category), [])

function FilterBar({ setCat, clickedCat }) {
    return (
            <ul className='filterbar'>
                {categories.map((cat, index) => (
                    <li  key={`${cat}-${index}`}>

                        { (clickedCat === cat) ?
                            <input type="button"  className='filterbar-btn-selected' value={cat} onClick={(e) => {setCat(e.target.value)}} /> 
                        : 
                            <input type="button"  className='filterbar-btn' value={cat} onClick={(e) => {setCat(e.target.value)}} /> 
                        }
                    </li>
                ))}
                
            </ul>
    )}

export default FilterBar