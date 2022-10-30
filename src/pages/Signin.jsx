import { useState } from 'react'
import { Link } from "react-router-dom";

let Signin = () => {
  const [toggle, setToggle] = useState(true);
  const [passwordShown, setPasswordShown] = useState(false);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
    setPasswordShown((prevState) => !prevState);
  };

  return (
    <div className="signin">
      <h5 className="signin-title">Welcome back</h5>
      <h6>Sign in to continue</h6>
      <form className="signin-form">
        <div className="input-div">
          <i className="bi bi-envelope icon"></i>
          <input className="signin-input" type="text" placeholder="Email" />
        </div>
        <div className="input-div">
          <i className="bi bi-key icon"></i>
          <span onClick={handleToggle} className="pwd-toggle">
            {toggle ? (
              <i className="bi bi-eye"></i>
            ) : (
              <i className="bi bi-eye-slash"></i>
            )}
          </span>
          <input
            className="signin-input"
            type={passwordShown ? "text" : "password"}
            placeholder="Password"
          />

        </div>
        <Link to='/home'>
          <button className="signin-btn btn">Sign in</button>
        </Link>
        <Link to="/signup">
          <button className="signup-link">Don't have an account? sign up</button>
        </Link>
      </form>
    </div>
  )
}

export default Signin;
