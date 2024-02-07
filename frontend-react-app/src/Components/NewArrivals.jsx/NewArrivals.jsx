import React from "react"
import "./NewArrivals.css"
import new_arrival__items from "../Assets/data.js"
import Item from "../Item/item.jsx"

const NewArrivals = () => {
  return (
    <div className="new-arrivals">
      <h1>NEW ARRIVALS</h1>
      <hr />
      <div className="new-arrivals__items">
        {new_arrival__items.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          )
        })}
      </div>
    </div>
  )
}

export default NewArrivals
