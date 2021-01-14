import React from "react";
import { Link } from "react-router-dom";

import { Container, Header, Logo, Burger, Footer } from "./styles";

const UniqueOverlay: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer>
        <ul>
          <li>
            <Link href="#">Tesla © 2021</Link>
          </li>
          <li>
            <Link href="#">Privacy &amp; Legal </Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
          <li>
            <Link href="#">Careers</Link>
          </li>
          <li>
            <Link href="#">Get Newsletter</Link>
          </li>
          <li>
            <Link href="#">News</Link>
          </li>
          <li>
            <Link href="#">Forums</Link>
          </li>
          <li>
            <Link href="#">Locations</Link>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
