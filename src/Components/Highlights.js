import Card from './Card';
import Greek from '../icons_assets/greek salad.jpg';
import Bruschetta from '../icons_assets/bruchetta.svg';
import Lemon from '../icons_assets/lemon dessert.jpg';


function Highlights() {

    return (


        <div className="Highlights">
            <div className="specialsHeader">
                <h1>This week's specials!</h1>
                <button><a href="#">Online Menu</a></button>
            </div>

            <div className='specials'>
                <Card
                    image={Greek}
                    title="Greek Salad"
                    price="$12.99"
                    description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with cruchy garlic and rosemary croutons."
                ></Card>
                <Card
                    image={Bruschetta}
                    title="Greek Salad"
                    price="$12.99"
                    description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with cruchy garlic and rosemary croutons."
                ></Card>
                <Card
                    image={Lemon}
                    title="Greek Salad"
                    price="$12.99"
                    description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with cruchy garlic and rosemary croutons."
                ></Card>
            </div>

        </div>


    );

}

export default Highlights;