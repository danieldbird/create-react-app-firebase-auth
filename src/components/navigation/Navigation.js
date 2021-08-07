import React from "react";
import { useContext } from "react";
import "./Navigation.css";
import firebase from "../auth/Firebase";
import { AuthContext } from "../auth/AuthContext";
import Button from "../login-button/Button";

function Navigation() {
  const { user } = useContext(AuthContext);

  const login = () => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };

  const logout = () => {
    firebase.auth().signOut();
  };

  return (
    <nav>
      {user ? (
        <span>
          {user.displayName}
          <Button onClick={logout} label="Logout" />
        </span>
      ) : (
        <span>
          <Button onClick={login} label="Login with Google" />
        </span>
      )}
    </nav>
  );
}

export default Navigation;
