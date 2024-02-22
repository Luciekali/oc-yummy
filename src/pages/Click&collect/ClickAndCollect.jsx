import IntroBanner from "./IntroSection/IntroBanner"
import MenuSection from "./MenuSection/MenuSection"
import RestaurantSection from "./RestaurantSection/RestaurantSection"

function ClickAndCollect () {
return (
    <div className="clickandcollect-page">
    <IntroBanner />
    <RestaurantSection />
    <MenuSection/>
    
    </div>
)
}

export default ClickAndCollect