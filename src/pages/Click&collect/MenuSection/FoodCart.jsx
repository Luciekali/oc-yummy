
function FoodCart () {
    return (
        <div className="cart">
            <h2>Votre commande</h2>
            <div className="cart-wrapper">
                <div className="cart-recap">
                    <h4>Récapitulatif de votre commande : </h4>
                </div>
                <h4>Total de votre commande : €</h4>
                <button className="pay-btn"type='submit'>Paiement</button>
            </div>
        </div>
    )
}

export default FoodCart