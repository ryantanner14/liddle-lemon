import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';

function Main() {
    console.log("Main Rendered")
    return (
        <>
            <Hero></Hero>
            <Highlights></Highlights>
            <Testimonials></Testimonials>
            <About></About>
        </>
    );

}

export default Main;