function ReviewCard(props) {
    return (
        <div className="review">
            <h1>{props.stars} Stars</h1>
            <div className="reviewInfo">
                <img className="reviewImage" src={props.image} alt="" />
                <h1 className="reviewName">{props.name}</h1>
            </div>

            <h2 className="ReviewDescription">{props.description}</h2>

        </div>



    );
}

export default ReviewCard;