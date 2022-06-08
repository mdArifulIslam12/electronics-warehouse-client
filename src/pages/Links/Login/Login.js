import React, { useRef } from "react";
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

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
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
    <div className="container w-50 mx-auto">
      <h2>Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            ref={emailRef}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            ref={passwordRef}
          />
        </Form.Group>
        {errorElement}
        <Button variant="primary" type="submit" className="px-5 mb-5">
          Login
        </Button>
        <p>
          New to are?{" "}
          <Link
            to="/register"
            onClick={handleRegister}
            className="text-primary text-decoration-none pe-auto"
          >
            Please Register
          </Link>
          .
        </p>
        <p className="">
          Forget Password{" "}
          <button
            onClick={resetPassword}
            className="btn text-primary text-decoration-none pe-auto"
          >
            Reset Password
          </button>
        </p>
      </Form>
      <SocialLink></SocialLink>
    </div>
  );
};

export default Login;
