import React from "react"
import styled from "styled-components"

// Style
import Header from "../layout/Header"
import Section from "../layout/Section"

import bwcar1 from "../../images/bwcar1.png"
import bwcar2 from "../../images/bwcar2.png"

import bs1 from "../../images/bs1.png"
import bs2 from "../../images/bs2.png"

import c1 from "../../images/c1.png"
import c2 from "../../images/c2.jpg"

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
              <Header>Connect</Header>
              <br />
              <br />
              <Left>
                Om goed van start te kunnen gaan met dit project zijn we
                individueel onderzoek gaan doen over de volgende
                probleemstellingen:
                <br />
                <br />
                Marvin: Hoe batterijbranden te blussen bij elektrische auto’s of
                scooters?
                <br />
                Fabian: Preventie bij verminderd zelfredzamen
                <br />
                Jordey: Brandbestrijding: voorlichting, preventie en bestrijding
                <br />
                India: Technische hulpverlening
                <br />
                <br />
                Uit deze onderzoeken vonden we 'Preventie bij verminderd
                zelfredzamen' het meest interessant en willen we deze verder
                onderzoeken
                <br />
                <br />
                Bekijk het onderzoek via Miro:{" "}
                <a href="https://miro.com/app/board/o9J_kx6_50U=/?moveToWidget=3074457346624957132">
                  Klik hier voor onderzoek
                </a>
                <br />
                <br />
                Daarna zijn we op bezoek geweest bij de kazerne in Berkel en
                Roderijs. Hier zijn we tot nog twee probleemstellingen gekomen:
                <br />
                - De brandweer heeft geen goed zicht op waar het incident in een
                appartement zich plaats vindt
                <br />
                - Weggebruikers raken in paniek op de weg, zodra een hulpdienst
                met sirenes nadert
                <br />
                <br />
                <Image src={bwcar1} />
                <Image src={bwcar2} />
                <br />
                <br />
                Nu we drie potentiële probleemstellingen hebben zijn we gaan
                brainstormen om tot verschillende ideeën te komen die deze
                problemen kunnen oplossen.
                <br />
                <br />
                De probleemstellingen:
                <br />
                - Preventie bij verminderd zelfredzamen
                <br />
                - De brandweer heeft geen goed zicht op waar het incident in een
                appartement zich plaats vindt
                <br />
                - Weggebruikers raken in paniek op de weg, zodra een hulpdienst
                met sirenes nadert
                <br />
                <br />
                De ideeën die uit de brainstormsessie kwamen:
                <br />
                - Voor dove mensen met trillingen een alarmsignaal geven Een
                slimme rolstoel die weet waar hij heen moet rijden tijdens een
                ongeval (iets minder realistisch) <br />
                - Informatieborden geven aan op welke afstand er een hulpdienst
                met sirenes aan aankomt Campagne op borden langs de weg ‘wat te
                doen tijdens hulpdiensten met sirenes’ <br />- Een autosensor
                die sirenes detecteert en daarom advies geeft Melding via
                navigatie Door middel van een sensor in de brandweerwagen
                krijgen omstanders in een auto een melding.
                <br />
                <br />
                <Image src={bs1} />
                <Image src={bs2} />
                <br />
                <br />
                Uit die brainstormsessie zijn twee ideeën gekomen waar we verder
                mee wilden gaan:
                <br />
                - Uitwijk navigatie
                <br />
                - Trilalarm via armband voor dove mensen.
                <br />
                <br />
                In week 5 moeten we 2 concepten presenteren. We hebben er nu 3
                dus moeten we onderzoeken welke concepten het meest potentie
                hebben. We hadden al ideeën om 3D-modellen te creëren, zodat de
                brandweer huisnummers van appartementen makkelijker kan vinden.
                Dit is een concept die we sowieso wilde presenteren, dus gaat
                het om uitwijk navigatie en om trilalarm via armband voor dove
                mensen.
                <br />
                <br />
                Via enquêtes hebben we bepaald welk idee meer potentie heeft.
                Uit de enquêtes is gebleken dat er voor dove mensen al erg veel
                oplossingen voor hun bestaan. bijna iedereen in de enquête geeft
                aan dat ze last hebben van anderen die in het verkeer rare
                manoeuvres doen om uit te wijken voor een hulpverleningsdienst.
                <br />
              </Left>
              <br />
              <br />
              <Header>Concept</Header>
              <br />
              <br />
              <Left>
                <h2>Concept 1</h2>
                Een navigatiesysteem waarbij er een melding wordt gegeven in
                welke afstand er een hulpverleningsdienst rijdt. Geeft uitwijk
                mogelijkheden aan op de navigatie om de bestuurder te helpen.
                <br />
                <br />
                <Image src={c1} />
                <h2>Concept 2</h2>
                Een implementatie op de huidige app van de brandweer die op de
                tablet staat in de brandweerwagen. Geeft 3D modellen aan van
                gebouwen om informatie te kunnen vergaren over het gebouw.
                <br /> <br />
                Zorgt ervoor dat de officier van dienst van tevoren een plan van
                aanpak kan maken.
                <br />
                <br />
                <Image src={c2} />
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

const Image = styled.img`
  width: 300px;
  display: inline-flex;
  padding: 10px;
`
