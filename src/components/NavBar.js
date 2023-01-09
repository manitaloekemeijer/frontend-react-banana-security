import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import {Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

function NavBar() {
  const {isAuthenticated, logoutFunction} = useContext(AuthContext);
  console.log(`console in App.js ${isAuthenticated}`);
  const navigate = useNavigate();

  return (
    <nav>
        <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
        </Link>

      {!isAuthenticated?
      <div>
        <button
          type="button"
           onClick={() => navigate('/signin')}
        >
          Log in
        </button>
        <button
          type="button"
          onClick={() => navigate('/signup')}
        >
          Registreren
        </button>
        <p>{email}</p>
      </div>
      :
     <button
     type="button"
     onClick={logoutFunction}
     >
       Log uit
     </button>
          }
    </nav>
  );
}

export default NavBar;