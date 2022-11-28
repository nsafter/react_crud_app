import img from "./img.png";
import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  let history = useNavigate();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // if (username === "admin" && password === "admin") {
    //   alert("admin logged in successfully");
    //   history("/read");
    // } else {
    //   alert("login successful");
    //   history("/");
    // }
    let correct = false;
    let res = await axios.get("http://localhost:5000/data");
    console.log(res);

    // console.log(typeof res.data[0].password);

    for (let i = 0; i < res.data.length; ++i) {
      if (
        res.data[i].username === username &&
        res.data[i].userpassword === password
      ) {
        correct = true;
        break;
      }
    }

    if (!correct) alert("wrong username and password.. Try again");
    else {
      if (username === "admin" && password === "admin") {
        alert("Welcome admin");
        history("/read");
      } else {
        alert("login successful");
        history("/");
      }
    }

    setUserName("");
    setPassword("");
  }

  return (
    <>
      <div className="register-container">
        <div className="col-25 animate__animated animate__fadeInLeft animate__slow">
          <img src={img} alt="noimg" className="img-left" />
        </div>
        <div className="col-75 animate__animated animate__fadeInRight animate__slow">
          <div className="right-div">
            <div>
              <div className="label">Username</div>
              <div>
                <input
                  type="username"
                  placeholder="your username"
                  className="res-inp"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="label">Password</div>
              <div>
                <input
                  type="password"
                  placeholder="your password"
                  className="res-inp"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="new-acc-label">
                <Link to="/register">Create new account</Link>
              </div>
            </div>
            <div>
              <input
                type="button"
                value="Submit"
                className="res-btn"
                disabled={!validateForm()}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
