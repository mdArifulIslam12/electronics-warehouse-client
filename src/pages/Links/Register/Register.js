import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Sheard/Loading/Loading";
import SocialLink from "../SocialLink/SocialLink";
import auth from "../../../firebase.init";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();
  const location = useLocation();
  const [updateProfile] = useUpdateProfile(auth);
  let errorElement;

  const from = location?.state?.from?.pathname || "/";
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const email = event.target.email.value;
    const passwords = event.target.password.value;
    await createUserWithEmailAndPassword(email, passwords);
    await updateProfile({ displayName });
  };
  const navigateLogin = () => {
    navigate("/login");
  };
  return (
    <div className="html">
      <div className="container ">
        <div class="d-flex justify-content-center h-100">
          <div class="card card-login">
            <div class="card-header">
              <h3>Sign In</h3>
              <div class="d-flex justify-content-end social_icon">
                <SocialLink></SocialLink>
              </div>
            </div>
            <div class="card-body">
              <form onSubmit={handleSubmit}>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="name"
                    name="name"
                  />
                </div>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="password"
                    name="password"
                  />
                </div>
                <div class="row align-items-center remember">
                  <input type="checkbox" onClick={() => setAgree(!agree)} />
                  Accept Terms and Conditions
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    disabled={!agree}
                    value="Sing Up"
                    class="btn float-right login_btn"
                  />
                </div>
              </form>
            </div>
            <div class="card-footer">
              {errorElement}
              <div class="d-flex justify-content-center links">
                Already have a account?
                <Link to="/login" onClick={navigateLogin}>
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
