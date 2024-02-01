import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import paw_logo from "../Assets/paw-logo-last.png"
import cart_icon from "../Assets/cart_icon.png"

const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  return (
    <div className="navbar">
      <div className="navbar__item navbar__first navbar__logo">
        <img className="navbar__logo-img" src={paw_logo} alt="" />
        <p>
          <span className="navbar__span-1">Pa</span>
          <span className="navbar__span-2">w S</span>
          <span className="navbar__span-3">to</span>
          <span className="navbar__span-4">re</span>
        </p>
      </div>
      <ul className="navbar__item navbar__second navbar__menu">
        <li
          onClick={() => {
            setMenu("shop")
          }}>
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("dogs")
          }}>
          <Link style={{ textDecoration: "none" }} to="/dogs">
            Dogs
          </Link>
          {menu === "dogs" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("cats")
          }}>
          <Link style={{ textDecoration: "none" }} to="/cats">
            Cats
          </Link>
          {menu === "cats" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("others")
          }}>
          <Link style={{ textDecoration: "none" }} to="/others">
            Others
          </Link>
          {menu === "others" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="navbar__item navbar__third navbar__login-cart">
        <Link to="/login">
          <button>Login</button>{" "}
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="navbar__cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
