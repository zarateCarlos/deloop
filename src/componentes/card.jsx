
import "../css/card.css";

const Card = ({ image, description }) => {
    return (
        <div className="tarjeta">
            <img src={image} alt="Card" />
            <p>{description}</p>
        </div>
    );
};

export default Card;
