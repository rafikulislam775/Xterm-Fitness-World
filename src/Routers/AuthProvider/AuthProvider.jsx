import { createContext, useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import PropTypes from "prop-types";
import auth from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // add loading state
  const [loading, setLoading] = useState(true);

  //create users  email and password base
  const createUsers = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Sign in existing users
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //Get the currently signed-in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //To sign out a user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  console.log(user);
  const authInfo = {
    createUsers,
    userLogin,
    user,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
