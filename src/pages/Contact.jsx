import mapImg from "../images/ui-map-wireframe.png";

let Contact = () => {
    return (
        <div className="contact">
            <h4 className='title'>Contact Us</h4>
            <div className="row">
                <div className="col-md-6">
                    <h5 className="contact-title">Get in touch </h5>
                    <form className="contact-form" action="">
                        <div className="input-div">
                        <label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="contact-input"
                            />
                        </label>
                        </div>
                        <div className="input-div">
                        <label>
                            <input
                                type="text"
                                placeholder="Email"
                                className="contact-input"
                            />
                        </label>
                        </div>
                        <textarea
                            placeholder="Message"
                            className="contact-input contact-textarea"
                        ></textarea>
                        <button className="btn contact-btn">Send</button>
                    </form>
                </div>
                <div className="col-md-6 contact-map">
                    <img src={mapImg} alt="map" />
                    <i className="bi bi-geo contact-geoloc"></i>
                </div>
            </div>
        </div>
    )
}

export default Contact;
