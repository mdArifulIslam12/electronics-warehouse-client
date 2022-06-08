import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";

const RequireAuth = ({ children }) => {
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading || sending) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div className="mt-5 w-50 mx-auto">
        <h3 className="text-danger">Your Email is not verified!!</h3>
        <h4>Please Verify your email address</h4>
        <button
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent email");
          }}
        >
          Verify email
        </button>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
