import Card from "../components/Card";
import img1 from '../images/houses/h1.jpeg';

let Home = () => {
    return (
        <div className="home">
            <div className="row">
                <div className="col-sm-12 col-md-6"><i className="bi bi-geo-alt me-2"></i>Location<i className="bi bi-caret-down"></i></div>
                <div className="col-sm-12 col-md-6"></div>
            </div>
            <div className="row mt-5">
                <h6>Recommended</h6>
                <div className="row">

                    <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                    <Card img={img1}/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                    <Card img={img1}/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                    <Card img={img1}/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                    <Card img={img1}/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                    <Card img={img1}/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                    <Card img={img1}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
