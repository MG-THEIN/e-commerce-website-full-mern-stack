import React from "react"
import "./item.css"

const item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <>{props.name}</>
      <div className="item__prices">
        <div className="item__price-new">${props.new_price}</div>
        <div className="item__price-old">${props.old_price}</div>
      </div>
    </div>
  )
}

export default item
