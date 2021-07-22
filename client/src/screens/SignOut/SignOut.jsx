import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { signOut } from "../../services/users";

const SignOut = () => {
  const [signedOut, setSignedOut] = useState(false);
  useEffect(() => {
    const signOutUser = async () => {
      const signOutBool = await signOut();
      setSignedOut(signOutBool);
    };
    signOutUser();
  }, []);
  return signedOut ? <Redirect to="sign-in" /> : <h2>Signed out...</h2>;
};

export default SignOut;
