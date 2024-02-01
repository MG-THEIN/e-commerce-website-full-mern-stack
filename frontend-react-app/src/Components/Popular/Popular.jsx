import React from "react"
import "./Popular.css"
import Item from "../Item/item.jsx"
import puppy_data from "../Assets/data.js"

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR PUPPIES</h1>
      <hr />
      <div className="popular__puppy">
        {puppy_data.map((item, i) => {
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

export default Popular
