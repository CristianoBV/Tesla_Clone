import styled from "styled-components";

import carOne from "../../assets/Desktop-Model3.jpeg";
import carTwo from "../../assets/Desktop-ModelS.jpeg";
import carThree from "../../assets/Desktop-ModelX.jpeg";
import carFour from "../../assets/Desktop-ModelY.jpeg";
import carFive from "../../assets/Desktop-ModelY.jpeg";
import carSix from "../../assets/Desktop-SolarPanels.jpeg";
import carSeven from "../../assets/Desktop-SolarRoof.jpeg";

export const Container = styled.div`
  .colored:nth-child(1) {
    background-image: url(${carOne});
    display: table;
    width: 100%;
    height: 100vh;
    padding: 100px 0;
    background-position: 30% 45%;
    background-size: cover;
  }
  .colored:nth-child(2) {
    background-image: url(${carTwo});
    display: table;
    width: 100%;
    height: 100vh;
    padding: 100px 0;
    background-position: 30% 45%;
    background-size: cover;
  }
  .colored:nth-child(3) {
    background-image: url(${carThree});
    display: table;
    width: 100%;
    height: 100vh;
    padding: 100px 0;
    background-position: 30% 45%;
    background-size: cover;
  }
  .colored:nth-child(4) {
    background-image: url(${carFour});
    display: table;
    width: 100%;
    height: 100vh;
    padding: 100px 0;
    background-position: 30% 45%;
    background-size: cover;
  }
  .colored:nth-child(5) {
    background-image: url(${carFive});
    display: table;
    width: 100%;
    height: 100vh;
    padding: 100px 0;
    background-position: 30% 45%;
    background-size: cover;
  }
  .colored:nth-child(6) {
    background-image: url(${carSix});
    display: table;
    width: 100%;
    height: 100vh;
    padding: 100px 0;
    background-position: 30% 45%;
    background-size: cover;
  }
  .colored:nth-child(7) {
    background-image: url(${carSeven});
    display: table;
    width: 100%;
    height: 100vh;
    padding: 100px 0;
    background-position: 30% 45%;
    background-size: cover;
  }
`;
