import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AchievementCard from "./AchievementCard";
import Particle from "../Particle";

// 📸 Import your images
import cert1 from "../../Assets/Certifications/1.1 Internship.jpg";
import cert2 from "../../Assets/Certifications/1.2 Programming using java.jpg";
import cert3 from "../../Assets/Certifications/1.2 Programming using java.jpg";
import cert4 from "../../Assets/Certifications/1.2 Programming using java.jpg";
import cert5 from "../../Assets/Certifications/1.2 Programming using java.jpg";
import cert6 from "../../Assets/Certifications/1.2 Programming using java.jpg";
import cert7 from "../../Assets/Certifications/1.2 Programming using java.jpg";

import gallery1 from "../../Assets/Gallery/1.2 Programming using java.jpg";
import gallery2 from "../../Assets/Gallery/1.2 Programming using java.jpg";

function Achievements() {
  const certifications = [
    {
      title: "Infosys Springboard – Internship 5.0",
      imgPath: cert1,
      description:
        "Successfully completed a hands-on internship program organized by Infosys Springboard, focused on the Development of a Seamless Community Interaction and Management System. Led the team throughout the internship, overseeing design, implementation, and delivery of the project. The internship emphasized real-world problem solving using web development technologies. Duration: February 10 – April 10, 2025.",
    },
    {
      title: "Infosys Springboard – Programming using Java",
      imgPath: cert2,
      description:
        "Completed a professional-level course on Programming using Java offered by Infosys Springboard. The course covered core Java concepts such as object-oriented programming, control structures, exception handling, and Java APIs, laying a strong foundation for backend and application development. Date of Completion: August 20, 2024.",
    },
  ];

  const extraCurriculars = [
    {
      title: "Hackathon Winner",
      imgPath: gallery1,
      description:
        "Secured 1st place in state-level hackathon conducted by ABC University among 40+ teams.",
    },
    {
      title: "Workshop Speaker - Tech Fest",
      imgPath: gallery2,
      description:
        "Delivered a workshop on ‘AI Tools for Developers’ during Tech Fest 2024, attended by 200+ students.",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Achievements</strong>
        </h1>
        <p style={{ color: "white" }}>
          Certifications & Extra-Curricular Highlights
        </p>

        <h2 className="project-heading" style={{ marginTop: "40px" }}>
          🏅 Certifications
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          {certifications.map((cert, index) => (
            <Col md={4} className="project-card" key={index}>
              <AchievementCard {...cert} />
            </Col>
          ))}
        </Row>

        <h2 className="project-heading" style={{ marginTop: "40px" }}>
          🎉 Extra-Curricular / Gallery
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          {extraCurriculars.map((item, index) => (
            <Col md={4} className="project-card" key={index}>
              <AchievementCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Achievements;
