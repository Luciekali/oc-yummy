import { menu } from '../../../datas/menu'

const categories = menu.reduce(
    (acc, menu) =>
        acc.includes(menu.category) ? acc : acc.concat(menu.category), [])

function FilterBar({ setCat }) {
    return (
            <ul className='filterbar'>
                {categories.map((cat, index) => (
                    <li  key={`${cat}-${index}`}>
                        <button  className='filterbar-btn' value={cat} onClick={(e) => {setCat(e.target.value)}}>{cat}</button>
                </li>
                ))}
                
            </ul>
    )}

export default FilterBar