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
    <div className="container w-50 mx-auto">
      <h2 className="text-center text-primary mt-5 mb-3">Please Register </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
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
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Accept Terms and Conditions"
            name="terms"
            onClick={() => setAgree(!agree)}
            className={agree ? "text-primary" : "text-danger"}
          />
        </Form.Group>
        <Button disabled={!agree} variant="primary" type="Login">
          Register
        </Button>
        {errorElement}
      </Form>
      <p className="">
        Already have a account?{" "}
        <Link
          to={"/login"}
          onClick={navigateLogin}
          className="text-primary text-decoration-none pe-auto"
        >
          Please Login
        </Link>
      </p>
      <SocialLink></SocialLink>
    </div>
  );
};

export default Register;
