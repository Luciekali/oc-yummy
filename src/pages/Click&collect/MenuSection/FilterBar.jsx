import { useState } from 'react'
import { menu } from '../../../datas/menu'
import '../../../styles/pages/clickandcollect/menusection.scss'
const categories = menu.reduce(
    (acc, menu) =>
        acc.includes(menu.category) ? acc : acc.concat(menu.category), [])




function FilterBar({ setCat }) {
const [activeCat, setActive] = useState(false)

    return (
            <ul className='filterbar'>
                {categories.map((cat, index) => (
                    <li  key={`${cat}-${index}`}>
                        <button  className='filterbar-btn' value={cat} activeCat={activeCat} onClick={(e, button) => {{{setCat(e.target.value)}}; {setActive(e.target === true)}; {
activeCat === true? li.button.classList.add('active') : li.button.classList.remove('active')}}}>{cat}</button>
                </li>
                ))}
                
            </ul>
    )}

export default FilterBar