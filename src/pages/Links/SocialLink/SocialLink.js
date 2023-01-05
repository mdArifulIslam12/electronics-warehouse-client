import React from "react";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
  if (error) {
   
    toast.error(`${error?.message} `);          
 
  }
  if ( error2) {
   
    toast.error(` ${error2?.message}`);          
 
  }
  return (
    <div>
      <button className="btn" onClick={() => signInWithGoogle()}>
          <span><i class="fab fa-google-plus-square"></i></span>
          </button>
					<button className="btn"  onClick={() => signInWithGithub()}>
          <span><i class="fab fa-github-square"></i></span>
          </button>         
     
    </div>
  );
};

export default SocialLink;
