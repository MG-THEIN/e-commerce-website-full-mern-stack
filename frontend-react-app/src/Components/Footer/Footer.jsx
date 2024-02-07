import React from "react"
import "./Footer.css"
import footer_logo from "../Assets/paw-logo-last.png"
import instagram_icon from "../Assets/instagram_icon.png"
import pinterest_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={footer_logo} alt="" />
        <p>Paw Store</p>
      </div>
      <ul className="footer__links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer__social--icon">
        <div className="footer__icons--container">
          <div className="footer__icons">
            <img src={instagram_icon} alt="" />
          </div>
          <div className="footer__icons">
            <img src={pinterest_icon} alt="" />
          </div>
          <div className="footer__icons">
            <img src={whatsapp_icon} alt="" />
          </div>
        </div>
        <div className="footer__copyright">
          <hr />
          <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
