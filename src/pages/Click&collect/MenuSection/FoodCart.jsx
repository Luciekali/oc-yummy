
function FoodCart ({ cart, }) {
    const total = cart.reduce(
        (acc, foodType) => acc + foodType.quantity * foodType.price, 0
    )
    return (
        <div className="cart">
            <h2>Votre commande</h2>
            <div className="cart-wrapper">
                <div className="cart-recap">
                    <h4>Récapitulatif de votre commande : </h4>
                        
                        {cart.map(({name, quantity, subtotal }, index) =>(
                            <ul className="cart-food" key={`${name}-${index}`}>
                                <li>{name} </li>
                                <div className="cart-amount">
                               <li> {quantity}</li>
                                <li>{subtotal}€</li></div>
                            </ul>
                            ))}
                        
                </div>
                <h4>Total de votre commande : {total}€</h4>
                <button className="pay-btn"type='submit'>Paiement</button>
            </div>
        </div>
    )
}

export default FoodCart