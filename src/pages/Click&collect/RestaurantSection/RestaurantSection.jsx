import { restaurant } from "../../../datas/restaurant"
import '../../../styles/pages/clickandcollect/restaurantsection.scss'

function RestaurantSection () {
return (
    <section className="restaurant-section">
        <h2>Selectionnez votre restaurant</h2>  
        
       <ul className="restaurant-list">
            {restaurant.map((restau) => (
                
                <li className='restaurant-card'key={restau.id}>
                    <label className="restaurant-infos">
                        <div>
                        <h3>{restau.name}</h3>
                        <p>{restau.adress}</p>
                        <p>{restau.city}</p>
                        <p>{restau.open}h à {restau.close}h</p>
                        </div>
               <input className='radio-btn' type='radio' value={`${restau.name}`}/></label></li>
               
                
       ))}
      
       </ul> 
    </section>
)
}

export default RestaurantSection