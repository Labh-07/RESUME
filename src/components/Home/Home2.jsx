import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineX, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate developer who enjoys solving real-world problems
              using technology. <br />
              <br />I am fluent in
              <i>
                <b className="purple">
                  {" "}
                  Java, JavaScript (REACT), and basic Python
                </b>
              </i>
              , and I’ve worked with both
              <b className="purple"> frontend </b> and{" "}
              <b className="purple">backend</b> technologies.
              <br />
              <br />
              My field of interest lies in building complete web products using
              <i>
                <b className="purple"> MERN Stack and Spring Boot</b>
              </i>
              . I'm especially interested in creating systems like{" "}
              <b className="purple">
                society management platforms, healthcare portals,
              </b>{" "}
              and scalable user interfaces.
              <br />
              <br />I also enjoy collaborating in team environments, learning
              new tech, and contributing to real-world projects through
              internships and open source.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/labh-patel-77693124b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/Labh-07"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Labh_1306"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineX />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/labh_p1306/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
