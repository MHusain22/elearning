import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <div className="fl">
        <Head />
        <header>
          <nav className="flexSB">
            <ul
              className={click ? "mobile-nav" : "flexSB "}
              onClick={() => setClick(false)}
            >
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="#Course">Courses</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <button className="toggle" onClick={() => setClick(!click)}>
              {click ? (
                <i className="fa fa-times"> </i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
