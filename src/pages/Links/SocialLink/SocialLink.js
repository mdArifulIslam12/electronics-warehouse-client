import React from "react";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../SocialLink/SocialLink";
import "./SocialLink.css";

const SocialLink = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
  const location = useLocation();
  const navigate = useNavigate();
  let errorElement;
  let from = location.state?.from?.pathname || "/";

  if (user || user2) {
    navigate(from, { replace: true });
  }
  if (loading || loading2) {
    return <Loading></Loading>;
  }
  if (error || error2) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message} {error2?.message}
        </p>
      </div>
    );
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div className="social-border"></div>
        <div className="mt-3">
          <p className="px-2">or</p>
        </div>
        <div className="social-border"></div>
      </div>
      <div className="socialLink-button">
        <p>{errorElement}</p>
        <button
          className="btn w-50 my-2 text-white d-block mx-auto d-flex justify-content-center align-items-center"
          onClick={() => signInWithGoogle()}
        >
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt=""
          />
          <p className="mx-2 mt-3">Google Sign in</p>
        </button>
        <button
          className="btn w-50 my-2 text-white d-block mx-auto d-flex justify-content-center align-items-center"
          onClick={() => signInWithGithub()}
        >
          <img
            src="https://pngimg.com/uploads/github/github_PNG88.png"
            alt=""
          />
          <p className="mx-2 mt-3">Github Sign in</p>
        </button>
      </div>
    </div>
  );
};

export default SocialLink;
