import React from "react"
import styled from "styled-components"

// Style
import Header from "../layout/Header"
import Section from "../layout/Section"

import india from "../../images/india.jpeg"
import fabian from "../../images/fabian.jpeg"
import marvin from "../../images/marvin.jpeg"
import jordey from "../../images/jordey.jpeg"

const Team = () => {
  return (
    <StyledTeam>
      <Header>The Team</Header>
      <div className="team">
        <div className="avatar__wrapper">
          <div className="avatar Marvin" />
          <h2>Marvin</h2>
          <span>Development</span>
        </div>
        <div className="avatar__wrapper">
          <div className="avatar fabian" />
          <h2>Fabian</h2>
          <span>Development</span>
        </div>
        <div className="avatar__wrapper">
          <div className="avatar India" />
          <h2>India</h2>
          <span>Design</span>
        </div>
        <div className="avatar__wrapper">
          <div className="avatar Jordey" />
          <h2>Jordey</h2>
          <span>Design</span>
        </div>
      </div>
    </StyledTeam>
  )
}

export default Team

const StyledTeam = styled(Section)`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fdebd5;
  color: #284f70;
  padding: 90px 0;

  h1 {
    font-weight: 900;
  }

  .team {
    width: 600px;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 80px 0px 50px;

    .avatar__wrapper {
      --margin: 40px;
      width: calc(100% / 2 - (var(--margin) * 2));
      height: auto;
      margin-bottom: var(--margin);

      .avatar {
        background-size: cover;
      }
      .Marvin {
        background-image: url(${marvin});
      }
      .fabian {
        background-image: url(${fabian});
      }
      .Jordey {
        background-image: url(${jordey});
      }
      .India {
        background-image: url(${india});
      }

      h2,
      span {
        text-align: center;
        margin: 0 auto;
        display: block;
      }

      h2 {
        font-size: 1.2rem;
        margin-bottom: 8px;
        font-weight: 700;
      }

      span {
        font-weight: 100;
        font-size: 0.9rem;
      }

      .avatar {
        background-color: #000;
        width: 200px;
        height: 200px;
        border-radius: 50% 50%;
        margin: 0 auto 20px;
      }
    }
  }
`
