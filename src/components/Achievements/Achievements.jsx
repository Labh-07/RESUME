import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AchievementCard from "./AchievementCard";
import Particle from "../Particle";

// 📸 Import your images
import cert1 from "../../Assets/Certifications/1.1 Internship.jpg";
import cert2 from "../../Assets/Certifications/1.2 Programming using java.jpg";
import cert3 from "../../Assets/Certifications/1.3 hackathon.jpg";
import cert4_1 from "../../Assets/Certifications/1.4 DBMS Part 1.jpg";
import cert4_2 from "../../Assets/Certifications/1.4 DBMS Part 2.jpg";
import cert5 from "../../Assets/Certifications/1.5 No SQL DB.jpg";
import cert6 from "../../Assets/Certifications/1.6 Agile Scrum.jpg";
import cert7 from "../../Assets/Certifications/1.7 DSA With java.jpg";

import gallery1 from "../../Assets/Gallery/2.1 Team lead.jpg";
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
    {
      title: "Participation in Codeverse – HackTheSpring '25 Hackathon",
      imgPath: cert3,
      description:
        "Participated in the Codeverse track at HackTheSpring '25, a national-level hackathon hosted by Government Engineering College, Gandhinagar. The event was held from February 28 to March 1, 2025, and brought together developers from across the state to build innovative solutions under time constraints and real-world themes.",
    },
    {
      title: "Infosys Springboard – Database Management System Part 1",
      imgPath: cert4_1,
      description:
        "Successfully completed Part 1 of the Database Management System course offered by Infosys Springboard. The course focused on foundational database concepts, relational models, and core SQL query structures. This course helped build a strong base in database design and management. Date of Completion: August 20, 2024.",
    },
    {
      title: "Infosys Springboard – Database Management System Part 2",
      imgPath: cert4_2,
      description:
        "Completed Part 2 of the Database Management System course from Infosys Springboard, covering advanced topics such as normalization, ER diagrams, indexing, transaction management, and real-world database applications. The course provided deep insights into modern DBMS architecture and performance tuning. Date of Completion: August 20, 2024.",
    },
    {
      title: "Infosys Springboard – Introduction to NoSQL Databases",
      imgPath: cert5,
      description:
        "Completed the 'Introduction to NoSQL Databases' course offered by Infosys Springboard. The course provided insights into NoSQL database types such as key-value, document, column, and graph databases, focusing on real-world applications and scalability advantages over traditional relational databases. Date of Completion: August 20, 2024.",
    },
    {
      title: "Infosys Springboard – Agile Scrum in Practice",
      imgPath: cert6,
      description:
        "Completed the 'Agile Scrum in Practice' course from Infosys Springboard. This course focused on Agile principles, Scrum roles, ceremonies, and artifacts, providing hands-on understanding of agile project management. Strengthened practical knowledge of iterative development and team collaboration. Date of Completion: August 20, 2024.",
    },
    {
      title: "Infosys Springboard – Data Structures and Algorithms using Java",
      imgPath: cert7,
      description:
        "Successfully completed the 'Data Structures and Algorithms using Java' course offered by Infosys Springboard. The course covered key topics such as arrays, linked lists, stacks, queues, trees, and sorting/searching algorithms—implemented using Java—building strong problem-solving and programming skills. Date of Completion: August 20, 2024.",
    },
  ];

  const extraCurriculars = [
    {
      title: "Team Lead – Expanding Express Project",
      imgPath: gallery1,
      description:
        "Led a dynamic team to develop 'Expanding Express', a project showcased at a prestigious inter-college event. As the team leader, I guided the entire development lifecycle—from brainstorming innovative logistics solutions to delivering a functional web-based system. The project demonstrated real-world applications of full-stack development and team collaboration.",
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
