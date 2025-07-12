import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Labh Patel </span>
            from <span className="purple">Gandhinagar, Gujarat, India.</span>
            <br />
            I am currently pursuing a Bachelor's degree in Computer Engineering
            from Government Engineering College, Sector-28, under Gujarat
            Technological University.
            <br />
            With a strong academic record and a current CGPA of{" "}
            <b className="purple">8.96</b>, I strive to maintain consistency,
            discipline, and a passion for tech.
            <br />
            I recently completed a Full-Stack Developer Internship at Infosys,
            where I led the development of a Society Management System using
            modern technologies.
            <br />
            <br />
            Apart from coding, here are some things I love doing!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Problem Solving
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing & UI Building
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking & Photography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I build things not just to function — but to create real impact."
          </p>
          <footer className="blockquote-footer">Labh Patel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
