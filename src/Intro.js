import React from "react";
import Container from "react-bootstrap/Container";
import "./Intro.css";

const Intro = () => {
  return (
    <React.Fragment>
      <Container>
        <div className="header">
          <h2 className="title">Hey There!</h2>
          <p className="desc">I am Ameya Salankar!</p>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Intro;
