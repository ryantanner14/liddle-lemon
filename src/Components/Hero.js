import bruschetta from "../icons_assets/bruchetta.svg"

function Hero() {

    return (
        <div className="Hero">
            <div className="left">
                <h1 className="heroTitle">Little Lemon</h1>
                <h2 className="heroText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quidem animi officia. Blanditiis cum asperiores, accusamus adipisci ipsum sit, iusto quos optio ad, voluptate qui nulla rem? Minima, minus aliquam?</h2>
                <button className="Button">Reserve a Table</button>
            </div>
            <div className="right">
                <img className="Image" src={bruschetta} alt="bruschetta: delish" />
            </div>
        </div>
    );

}

export default Hero;