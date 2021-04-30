import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

const Header = (props) => {
  const { user, onLogout } = useContext(UserContext);

  return (
    <header className="App-header">
      <ul className="container">
        <li>
          <Link to="/">Home Recipes</Link>
        </li>
        {user.isAuthenticated ? (
          <>
            <li>
              <Link to="/new">New Recipes</Link>
            </li>
            <li>
              <button
                className="linkLike"
                onClick={(event) => {
                  event.preventDefault();
                  onLogout();
                }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
