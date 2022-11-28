//import bg from '../images/a.jpeg'
import h2 from '../images/houses/h2.jpeg'
//import h3 from '../images/houses/h3.jpeg'

let Landing = () => {
    return (
        <>
        <div className="landing mt-5">
            {/* <img src={bg} alt="etienne beauregard riverin unsplash" className='bg-img'/> */}

            <div className="row">
                <p className='hero-title'>Search for your next home with ease</p>
            </div>
        </div>
        <div className='article-title'><h5>Select your location</h5></div>
        <div className="article1">
            <div className="row mt-4">
                {/* <h5 className="text-center">Select your location</h5> */}
                <div className="col-sm-12 col-md-6">
                    <img src={h2} alt="" className="landing-house" />
                </div>
                <div className="col-sm-12 col-md-6">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                </div>
            </div>
        </div>
        {/* <div className='article-title'><h5>Customize search options</h5></div>
        <div className="article2">
            <div className="row mt-4">
                <h5 className="text-center">Customize search options</h5>
                <div className="col-sm-12 col-md-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="col-sm-12 col-md-6">
                <img src={h3} alt="" className="landing-house" />
                </div>
            </div>
        </div> */}
        <div className="banner">
            Your home search partner
        </div>
        </>
    )
}

export default Landing;
