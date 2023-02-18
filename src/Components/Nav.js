import Logo from "../Images/Logo.svg"

function Nav() {

    return (
        <ul className="NavBar">
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
        </ul >
    );

}

export default Nav;