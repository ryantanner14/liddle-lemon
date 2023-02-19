import MarioAdrianB from "../icons_assets/Mario and Adrian b.jpg"

function About() {

    return (
        <div className="About">
            <h1 className="About left">Little Lemon</h1>
            <h2 className="About left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quidem animi officia. Blanditiis cum asperiores, accusamus adipisci ipsum sit, iusto quos optio ad, voluptate qui nulla rem? Minima, minus aliquam?</h2>
            <img className="About Image" src={MarioAdrianB} alt="Mario and Adrian laughing" />
        </div>

    );

}

export default About;