import Logo from "../Images/Logo.svg"
import { Link } from "react-router-dom";
import Main from "./Main";

function Nav() {

    return (

        <div className="NavBar">
            <Link to="/" className="NavItem">
                <img src={Logo} alt="Little Lemon Logo" />
            </Link>
            <Link to="/" className="NavItem">Main</Link>
            <Link to="/about" className="NavItem">About</Link>
            <Link to="/" className="NavItem">Menu</Link>
            <Link to="/booking" className="NavItem">Reservations</Link>
            <Link to="/" className="NavItem">Order Online</Link>
            <Link to="/" className="NavItem">Login</Link>

        </div>
        /*        <ul className="NavBar">
                   
                   <li>
                       <a href="#">
                           <img src={Logo} alt="Little Lemon Logo" />
                       </a>
                   </li>
                   <li><a href="#">Home</a></li>
                   <li><a href="#">About</a></li>
                   <li><a href="#">Menu</a></li>
                   <li><a href="#">Reservations</a></li>
                   <li><a href="#">Order Online</a></li>
                   <li><a href="#">Login</a></li>
                   
       
               </ul > */
    );

}

export default Nav;