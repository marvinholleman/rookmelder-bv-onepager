import React from "react"

// Components
import Nav from "../components/layout/Nav"
import Hero from "../components/sections/Hero"

// import Products from "../components/sections/Products"
import Team from "../components/sections/Team"
import Contact from "../components/sections/Contact"

// Style
import GlobalStyle from "../components/layout/GlobalStyle"

const IndexPage = () => (
  <div>
    <GlobalStyle />
    <Nav />
    <Hero />
    <Team />
    {/* <Products /> */}
    <Contact />
  </div>
)

export default IndexPage
