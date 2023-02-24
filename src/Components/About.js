import MarioAdrianB from "../icons_assets/Mario and Adrian b.jpg"

function About() {

    return (
        <div className="About">
            <div className="aboutLeft">
                <h1>Little Lemon</h1>
                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quidem animi officia. Blanditiis cum asperiores, accusamus adipisci ipsum sit, iusto quos optio ad, voluptate qui nulla rem? Minima, minus aliquam?</h2>
            </div>
            <img className="aboutImage" src={MarioAdrianB} alt="Mario and Adrian laughing" />
        </div>

    );

}

export default About;