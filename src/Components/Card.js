function Card(props) {
    return (
        <div className="card">

            <img className="cardImage" src={props.image} alt="Delicious Meal" />

            <div className="cardInfo">
                <h1 className="cardTitle">{props.title}</h1>
                <h1 className="cardPrice">{props.price}</h1>
            </div>

            <h2 className="cardDescription">{props.description}</h2>

            <button className="cardButton">Order Delivery</button>

        </div>



    );
}

export default Card;