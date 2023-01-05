import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Sheard/Loading/Loading";
import SocialLink from "../SocialLink/SocialLink";

import loginImg from '../../../image/login.jpg'
import './Login.css'

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const [agree, setAgree] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  let errorElement;
  let from = location.state?.from?.pathname || "/";

  if (loading || sending) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
  };
  const handleRegister = () => {
    navigate(`/register`);
  };
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Send Your email");
    } else {
      toast("Enter your email address.");
    }
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
							{/* <span class="input-group-text"><i class="fas fa-user"></i></span> */}
							<span class="input-group-text"><i class="fas fa-envelope"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="Email" ref={emailRef}
            required />
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" placeholder="password" ref={passwordRef}/>
					</div>
					<div class="row align-items-center remember">
						<input type="checkbox"  onClick={() => setAgree(!agree)}/>Remember Me
					</div>
					<div class="form-group">
						<input type="submit" disabled={!agree} value="Login" class="btn float-right login_btn"/>
					</div>
				</form>
			</div>
			<div class="card-footer">
      {errorElement}
				<div class="d-flex justify-content-center links">
					Don't have an account?<Link
            to="/register"       
            onClick={handleRegister} 
          >
            Sign Up
          </Link>
				</div>
				<div class="d-flex justify-content-center">
					
          <button
            onClick={resetPassword}
            className="btn text-primary text-decoration-none pe-auto login-button"
          >
           Forgot your password?
          </button>
				</div>
			</div>
		</div>
	</div>
        </div>


    </div>
  );
};

export default Login;
