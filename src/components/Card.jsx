import { Link } from 'react-router-dom';
import img1 from '../images/houses/h1.jpeg';

let Card = (img) => {
    
    return (
        <div className="card">
            <img src={img1} alt="product" className="card-img " />
            <div className="card-details">
                <p className="card-title">House</p>
                <span className="card-price">$1200</span>
            </div>
            <div className="card-btns">
                
            </div>
        </div>
    );
}

export default Card;