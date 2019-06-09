import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const AboutMe = () => {
  return (
    <Container>
      <header>
        <h2>About Me</h2>
      </header>
      <Image
        src="https://avatars0.githubusercontent.com/u/18664817?s=460&v=4"
        thumbnail
      />
      <p style={{ marginTop: "2em" }}>
        I am pursuing my B.E. in CS from BITS Pilani, Hyderabad Campus.
        <br />
        While not making websites and doing machine learning, I like to play
        cricket, watch movies and read lots of books.
        <br />I also like to play Tabla and solve the Rubiks' Cube.
      </p>
    </Container>
  );
};

export default AboutMe;
