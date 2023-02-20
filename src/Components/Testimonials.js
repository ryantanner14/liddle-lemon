import ReviewCard from './ReviewCard';
import Fred from '../icons_assets/freg.jpeg';
import Velma from '../icons_assets/velma.jpeg';
import Shaggy from '../icons_assets/shaggy.jpeg';


function Testimonials() {

    return (
        <div className="Testimonials">
            <ReviewCard
                stars="5"
                name='Fred'
                image={Fred}
                description="I can't decide if I like this food or traps better!"
            ></ReviewCard>
            <ReviewCard
                stars="4"
                name='Velma'
                image={Velma}
                description="Zoinks that's good!"
            ></ReviewCard>
            <ReviewCard
                stars="5"
                name='Shaggy'
                image={Shaggy}
                description="Like, it's the greatest food in the world. Better than Scooby snacks, right Scoob?"
            ></ReviewCard>
        </div>

    );

}

export default Testimonials;