import { restaurant } from "../../../datas/restaurant"
import '../../../styles/pages/clickandcollect/restaurantsection.scss'
import { useState } from "react"

function RestaurantSection () {
  const [ restauCheck, setRestau] = useState(false)    
return (
    <section className="restaurant-section">
        <h2>Selectionnez votre restaurant</h2> 
       <ul className="restaurant-list">

            {restaurant.map((restau) => (
                <li className='restaurant-card'key={restau.id}>
                    <label className="restaurant-infos">
                        <div>
                        <h4>{restau.name}</h4>
                        <p>{restau.adress}</p>
                        <p>{restau.city}</p>
                        <p>{restau.open}h à {restau.close}h</p>
                        </div>
                        <input className='radio-btn' name='restaurant' value={`${restau.name}`} type='radio' 
                        checked={restauCheck} onChange={e => {setRestau(e.target.checked)}}/>
                    </label>
                </li>               
       ))}
       </ul> 
    </section>
)}

export default RestaurantSection