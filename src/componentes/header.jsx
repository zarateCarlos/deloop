
import "../css/header.css";
import Logo from "/logoRojo.png";

const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="pepe">
                    <img className="logo" src={Logo} alt="" />
                </div>
                <div className="frase">
                    <h2>#VivirEnMúsica</h2>
                </div>
            </div>
        </header>
    )
}
export default Header;