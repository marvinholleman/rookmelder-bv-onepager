import React from "react"
import styled from "styled-components"

// Style
import Header from "../layout/Header"
import Section from "../layout/Section"

// Images

const Products = () => {
  return (
    <>
      {/* <StyledProducts>
        <Wrap>
          <First>
            <Wrapper>
              
              <Intro />
              <Left />
            </Wrapper>
            <Right />
          </First>
        </Wrap>
      </StyledProducts> */}

      <Second>
        <StyledProductsAlt>
          <Wrap className="wrap">
            <Wrapper>
              <Header>Insights</Header>
              <br />
              <br />
              <Left>
                Please find all our insights in our Miro board,
                <a href="https://miro.com/app/board/o9J_kx6_50U=/">
                  &nbsp;here
                </a>
              </Left>
            </Wrapper>
            <Right />
          </Wrap>
        </StyledProductsAlt>
      </Second>
    </>
  )
}

export default Products

const StyledProducts = styled(Section)`
  display: flex;
  background-color: #689187;
  color: "#35333";
`

const Wrap = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
`

const StyledProductsAlt = styled(Section)`
  display: flex;
  flex-flow: row-reverse;
  color: "#35333";
  .wrap {
    flex-flow: row-reverse;
  }
`

const First = styled.div`
  display: flex;
`

const Second = styled.div`
  background-color: #f2f4f5;
  color: white;
  padding: 80px 0;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Intro = styled.div`
  font-size: 1.4rem;
  margin: 15px 0;
  line-height: 30px;
  font-weight: 700;
`

const Left = styled.div`
  /* flex: 1; */
  line-height: 20px;
  color: #284f70;
`

const Right = styled.div`
  /* flex: 1; */
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 280px;
  }
`
