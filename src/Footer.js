import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Footer = () => {
  return (
    <footer className="footer text-center">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <a
              className="btn btn-outline-light btn-social mx-1"
              href="https://www.facebook.com/ameya.salankar.5"
            >
              <i className="fab fa-facebook-f fa-fw" />
            </a>

            <a
              className="btn btn-outline-light btn-social mx-1"
              href="https://www.twitter.com/iamameya_s"
            >
              <i className="fab fa-fw fa-twitter" />
            </a>

            <a
              className="btn btn-outline-light btn-social mx-1"
              href="https://www.github.com/ameya0598"
            >
              <i className="fab fa-fw fa-github" />
            </a>
          </Col>
          <Col md={6} sm={12} className="copyright">
            <i className="far fa-copyright" /> Ameya Salankar
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
