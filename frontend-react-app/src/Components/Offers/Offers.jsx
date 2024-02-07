import React from "react"
import "./Offers.css"
import group1 from "../Assets/group1.jpeg"

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers__left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PETS</p>
        <button>Check Now</button>
      </div>
      <div className="offers__right">
        <img src={group1} alt="" />
      </div>
    </div>
  )
}

export default Offers
