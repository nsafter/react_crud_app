import "./Register.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "./img1.png";
import axios from "axios";
import logoimg from "../../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Register = () => {
  const [fullname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [userpassword, setPassword] = useState("");

  let history = useNavigate();

  const postData = () => {
    console.log(fullname, email, username, userpassword);
    axios
      .post("http://localhost:5000/data", {
        fullname,
        email,
        username,
        userpassword,
      })
      .then(() => {
        alert("data saved successfully");
        history("/");
      });
    clearfields();
  };

  function clearfields() {
    setName("");
    setEmail("");
    setUserName("");
    setPassword("");
  }

  return (
    <>
      <div className="register-container">
        <div className="col-25 animate__animated animate__fadeInLeft animate__slow">
          <img src={img1} alt="noimg" className="img-left" />
        </div>
        <div className="col-75 animate__animated animate__fadeInRight animate__slow">
          <div className="right-div">
            <div>
              <div className="label">Name</div>
              <div>
                <input
                  type="text"
                  placeholder="your name"
                  className="res-inp"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="label">Email</div>
              <div>
                <input
                  type="email"
                  placeholder="your email"
                  className="res-inp"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="label">Username</div>
              <div>
                <input
                  type="text"
                  placeholder="your username"
                  className="res-inp"
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <input
                type="button"
                value="Submit"
                className="res-btn"
                onClick={postData}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-div">
        <div className="content-wrapper animate__animated animate__fadeInUp animate__slow">
          <div className="logo-container">
            <img src={logoimg} alt="noimg" className="logo-img" />
          </div>
          <div className="footer-link">
            <Link path="/" className="link">
              Home
            </Link>
            <Link path="/about" className="link">
              About
            </Link>
            <Link path="/contact" className="link">
              Contact Us
            </Link>
          </div>
          <div className="icons">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faTwitter} className="awe-icon" />
            </div>
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faInstagram} className="awe-icon" />
            </div>
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faFacebook} className="awe-icon" />
            </div>
          </div>
        </div>
        <div className="trademark animate__animated animate__fadeInUp animate__slow">
          Version 1.2 | Image Licensing | Made By Nandini Sharma 😎
        </div>
      </div>
    </>
  );
};

export default Register;
