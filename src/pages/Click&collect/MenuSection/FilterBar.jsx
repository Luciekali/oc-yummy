import { menu } from '../../../datas/menu'

const categories = menu.reduce(
    (acc, menu) =>
        acc.includes(menu.category) ? acc : acc.concat(menu.category), [])

function FilterBar({ setCat }) {

    return (
        <div>
            <ul>
                {categories.map((cat, index) => (
                    <li key={`${cat}-${index}`}>
                        <button value={cat} onClick={(e) => setCat(e.target.value)}>{cat}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FilterBar