import LemonLogo from '../icons_assets/Logo.svg';

function Footer() {

    return (
        <div className="Footer">
            <img src={LemonLogo} alt="Little Lemon Logo" />
            <div className="footerLeft">
                <h3>Doormat Navigation</h3>
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Menu</h3>
                <h3>Reservations</h3>
                <h3>Order Online</h3>
                <h3>Login</h3>
            </div>
            <div className="footerMiddle">
                <h3>Contact</h3>
                <h3>Address</h3>
                <h3>626-867-5309</h3>
                <h3>little-lemon@gmail.com</h3>
            </div>
            <div className="footerRight">
                <h3>Social Media Links</h3>
                <h3>Facebook</h3>
                <h3>Instagram</h3>
                <h3>YouTube</h3>
            </div>


        </div>
    );

}

export default Footer;