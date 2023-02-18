import bruschetta from "../icons_assets/bruchetta.svg"

function Hero() {

    return (
        <div className="Hero">
            <h1 className="Hero left">Little Lemon</h1>
            <h2 className="Hero left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quidem animi officia. Blanditiis cum asperiores, accusamus adipisci ipsum sit, iusto quos optio ad, voluptate qui nulla rem? Minima, minus aliquam?</h2>
            <img className="Hero Image" src={bruschetta} alt="bruschetta: delish" />
            <button className="Hero Button">Reserve a Table</button>
        </div>
    );

}

export default Hero;