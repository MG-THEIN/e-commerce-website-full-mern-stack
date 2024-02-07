import React from "react"
import Hero from "../Components/Hero/Hero.jsx"
import Popular from "../Components/Popular/Popular.jsx"
import Offers from "../Components/Offers/Offers.jsx"
import NewArrivals from "../Components/NewArrivals.jsx/NewArrivals.jsx"
import NewsLetter from "../Components/NewsLetter/NewsLetter.jsx"

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewArrivals />
      <NewsLetter />
    </div>
  )
}

export default Shop
