import { useState } from "react";
import { Navigate } from "react-router-dom";
import { logIn, signUp } from "../utils/fetch";
import "../style/Login.css"

const Login = ({ setter, user }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [logBool, setLogBool] = useState(false);

  const submitSignUp = async (e) => {
    e.preventDefault();
    await signUp({ username, email, password }, setter);
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    await logIn({ username, password }, setter);
  };


  return (
    <div>
      {user && <Navigate to="/home" />}
      <form className="coloumn formPlacement" onSubmit={logBool ? submitLogin : submitSignUp}>
        <input className="inputBox" onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <div className="boxSpacing">
        {!logBool && <input id="email" className="inputBox" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />}
        </div>
        <input className="inputBox" onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"/>
        <div className="boxSpacing"/>
        <button className="formButtons" type="submit">{logBool ? "Log In" : "Sign Up"}</button>
      </form>
      <div className="boxSpacing"/>
      <button className="formButtons" onClick={() => setLogBool(!logBool)}>
        {logBool ? "Don't " : "Already "} have an account?
      </button>
    </div>
  );
};

export default Login;
