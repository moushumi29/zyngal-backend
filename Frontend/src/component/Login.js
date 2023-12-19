import React, { useRef, useState } from "react";
import "./style/style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [error, seError] = useState(false);

  const loginUser = async (userDetails) => {
    try {
      const response = await axios.post("http://localhost:5500/user/signin", {
        ...userDetails,
      });
      const { password } = response.data.details;
      navigate("/home2");
      sessionStorage.setItem("password", JSON.stringify(password));
    } catch (err) {
      console.log("err: ", err);
      seError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRef.current.value) {
      emailRef.current.focus();
      emailRef.current.style.border = "1px solid red";
    } else if (!passwordRef.current.value) {
      passwordRef.current.focus();
      passwordRef.current.style.border = "1px solid red";
    } else {
      const userDetails = {
        email_id: emailRef.current.value,
        password: passwordRef.current.value,
      };
      loginUser(userDetails);
    }
  };

  return (
    <div className="login-container">
      <h1>Login page</h1>
      <form className="login-inner-container">
        <label>Email Id: </label>
        <input
          type="email"
          name="email"
          placeholder="Enter you email"
          ref={emailRef}
        />
        <label>password: </label>
        <input
          type="password"
          name="password"
          placeholder="Enter you password"
          ref={passwordRef}
        />
        {error && <div style={{color:"red"}}>Email or Password is not valid</div>}
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
};

export default Login;
