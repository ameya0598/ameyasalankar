import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Portfolio.css";

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: "Hotel Booking Application",
          img: process.env.PUBLIC_URL + "/hotel_booking.png",
          link: "https://github.com/AtharvaSune/Oops-Project"
        },
        {
          title: "Research Paper Catalog",
          img: process.env.PUBLIC_URL + "/research_buddy.png",
          link: "https://github.com/ameya0598/ResearchBuddy"
        },
        {
          title: "Diff Tool",
          img: process.env.PUBLIC_URL + "/similarities.png",
          link: "https://github.com/ameya0598/similarities"
        },
        {
          title: "NGO Donation Website",
          img: process.env.PUBLIC_URL + "/ngo.png",
          link: "https://github.com/AtharvaSune/Nsemble"
        },
        {
          title: "Dummy Project",
          img: "https://picsum.photos/300",
          link: "https://www.github.com"
        }
      ]
    };
  }
  render() {
    return (
      <Container>
        <header>
          <h2>Some Projects made by Me</h2>
        </header>
        <p>
          I have mostly focused on Web Development until now. I am interested in
          Machine Learning and Operating Systems. Hoping to do some exciting
          stuff in the future!
        </p>

        <div className="content">
          <Row>
            {this.state.projects.map((x, i) => {
              return (
                <Col md={4} sm={6} className="topleveller" key={i}>
                  <div className="item">
                    <a
                      href={x["link"]}
                      style={{ textDecoration: "none" }}
                      className="image fit"
                    >
                      <img src={x["img"]} alt=" " className="img-x" />
                    </a>

                    <div className="center-block caption">
                      <h3>{x["title"]}</h3>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    );
  }
}

export default Portfolio;
