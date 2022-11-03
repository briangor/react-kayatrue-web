import { Link } from "react-router-dom";

let Navbar = () => {
    return (
        <nav className="navbar navbar-light navbar-expand-md fixed-top bg-light">
            <div className="container">
                <a className="navbar-brand d-flex w-50 me-auto" href="/">Kayatrue</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3"><span className="navbar-toggler-icon"></span></button>
                <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                    <ul className="navbar-nav w-100 justify-content-center">
                        <li className="nav-item active">
                            <Link to='' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-link">Contact</Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav ms-auto w-100 justify-content-end">
                        <li className="nav-item"><Link to='/signin' className="btn btn-outline-secondary mx-2">Sign in</Link></li>
                        <li className="nav-item"><Link to='/signup' className="btn btn-dark">Get started <i className="bi bi-arrow-right-circle"></i></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
