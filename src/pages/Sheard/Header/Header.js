import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              style={{ width: "200px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/TT_Electronics_logo.svg/1200px-TT_Electronics_logo.svg.png"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <CustomLink
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink className="nav-link" to="/blog">
                  Blog
                </CustomLink>
              </li>
              <li className="nav-item">
                {user && (
                  <CustomLink className="nav-link" to="/manageItem">
                    Manage Items
                  </CustomLink>
                )}
              </li>
              <li className="nav-item">
                {user && (
                  <CustomLink className="nav-link" to="/addProduct">
                    Add Item
                  </CustomLink>
                )}
              </li>
              <li className="nav-item">
                {user && (
                  <CustomLink className="nav-link" to="/myItem">
                    My Items
                  </CustomLink>
                )}
              </li>
              <li className="nav-item">
                {user ? (
                  <button className="btn" onClick={() => signOut(auth)}>
                    Sing Out
                  </button>
                ) : (
                  <CustomLink className="nav-link" to="/login">
                    Login
                  </CustomLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
